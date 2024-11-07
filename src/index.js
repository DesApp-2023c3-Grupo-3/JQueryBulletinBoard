import { connection, initilizeConnection, sendMessage } from "./modules/webSocketConnection.js";
import { formattedTime, getCurrentTime, getUrlParameter, fetch, getYouTubeVideoId } from "./modules/utils.js";
import { initializeCarousel } from "./modules/carousel.js"
import { coursesMock, schedulesMock } from "./mock/mock.js";

const HOSTNAME = 'http://186.13.152.219:4000'
const ADVERTISINGS_ENDPOINT = 'http://186.13.152.219:4000/advertising/screen'
const COURSES_ENDPOINT = 'http://186.13.152.219:4000/course/sector'
const SCREEN_ID = getUrlParameter('id')
let sectorData = null
let advertisingData = []
let coursesData = []

function contentFromAdvertising(anAdvertising) {
	switch (anAdvertising?.advertisingType?.name) {
		case 'Text':
			return {
				html: `<div class="flex items-center justify-center w-full h-full">${anAdvertising.payload}</div>`
			}
		case 'Video':
			return {
				html: `<div class="flex w-full h-full" id="${getYouTubeVideoId(anAdvertising.payload)}"></div>`,
				videoId: getYouTubeVideoId(anAdvertising.payload)
			}
		case 'Image':
			return {
				html: `<img class="flex aspect-square w-full" src="${anAdvertising.payload}" alt="${anAdvertising.name}" srcset="">`
			}
		default:
			return 'Unknown type'
	}
}

function loadTemplate() {
	let templateName = 'default'
	switch (sectorData?.screen?.templeteId || '1') {
		case '1':
			templateName = 'default'
			break
		case '2':
			templateName = 'full-screen'
			break
		case '3':
			templateName = 'video'
			break
	}

	const renderTime = () => $('#time').text(`${getCurrentTime() || '--:--'}`)

	$('#main').load('./templates/' + templateName + '.html', () => {
		$('#sector_name').text(`${sectorData?.sector?.name || 'No conectado'}`)
		$("#mapa").attr("src",`${HOSTNAME}/image/qr/plane/view`);
		setInterval(() => renderTime(), 1000);

		const middleIndex = Math.floor(advertisingData.length / 2);
		const advertisingsA = advertisingData.slice(0, middleIndex);
		const advertisingsB = advertisingData.slice(middleIndex);

		initializeCarousel($, 1, {
			items: [...advertisingsA].map(anAdvertising => ({
				content: `<div class='carousel-item'>${contentFromAdvertising(anAdvertising)?.html}</div>`,
				video: contentFromAdvertising(anAdvertising)?.videoId,
				duration: anAdvertising?.advertisingSectors ? anAdvertising.advertisingSectors.at(0).sector.screens.at(0).advertisingIntervalTime : 5
			})
      ),
		})
		initializeCarousel($, 2, {
			items: [...advertisingsB].map(anAdvertising => ({
				content: `<div class='carousel-item'>${contentFromAdvertising(anAdvertising)?.html}</div>`,
				video: contentFromAdvertising(anAdvertising)?.videoId,
				duration: anAdvertising?.advertisingSectors ? anAdvertising.advertisingSectors.at(0).sector.screens.at(0).advertisingIntervalTime : 5
			})
      ),
		})
		const chunkSize = 10;
		const coursesPages = []
		for (let i = 0; i < coursesData.length; i += chunkSize) {
				const chunk = coursesData.slice(i, i + chunkSize);
				coursesPages.push(chunk)
		}
		initializeCarousel($, 'courses-table', {
			items: coursesPages.map((aPage, index) => ({
				content: `<table key="${index}" class="carousel-item tabla-comisiones">
					<thead>
						<tr>
							<th>Materia</th>
							<th>Comisión</th>
							<th>Aula</th>
							<th>Horario</th>
						</tr>
					</thead>
					<tbody>
						${
							aPage.map(aCourse =>
								`<tr key="${aCourse?.id}">
									<td>${aCourse?.subject?.name}</td>
									<td>${aCourse?.name}</td>
									<td>${aCourse?.classroom?.name}</td>
									<td>${formattedTime(aCourse?.schedule?.startDate)} - ${formattedTime(aCourse?.schedule?.endDate)}</td>
								</tr>`
							).join('')
						}
					</tbody>
				</table>`,
				duration: 5
			})
      ),
		}, 'table')
	})
}

async function retrieveInitialData() {
	try {
		const advertisingsResponse = await fetch(`${ADVERTISINGS_ENDPOINT}/${SCREEN_ID}`)
		advertisingData = advertisingsResponse
		
		const coursesResponse = await fetch(`${COURSES_ENDPOINT}/${sectorData?.sector?.id}`)
		coursesData = coursesResponse

		loadTemplate()
	} catch (error) {
		console.error(error)
	}
}

function onConnectionInitialized(response) {
	$("#loader").text(`Connected to the WebSocket server.`)
	sendMessage('START_CONNECTION', SCREEN_ID)
}

function onMessage(message) {
	const { data } = JSON.parse(message.data);

	console.log('ON MESSAGE:')
	console.log(message)
	console.log(data)

	switch (data?.action) {
		case 'START_CONNECTION':
			sectorData = data?.data
			retrieveInitialData()
			break
	}
}

function onError(message) { $("#loader").text(`WebSocket connection failed: ${JSON.stringify(message)}`) }

const main = async () => {
	$("#loader").text('Cargando')
	try {
		connection.onOpen = onConnectionInitialized
		connection.onMessage = onMessage
		connection.onError = onError
		initilizeConnection()
	} catch (error) {
		console.error(JSON.stringify(error))
		$("#loader").text(`Error: ${JSON.stringify(error)}`)
	}
}

$(document).ready(main);

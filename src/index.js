import env from './modules/env.js'
import { connection, initilizeConnection, finalizeConnection, sendMessage } from "./modules/webSocketConnection.js";
import { formattedTime, getCurrentTime, getUrlParameter, fetch, getYouTubeVideoId } from "./modules/utils.js";
import { initializeCarousel, updateCarousel, removeCarouselItem } from "./modules/carousel.js"
import { coursesMock, advertisingsMock } from "./mock/mock.js";

const baseUrl = `${env.SSL}://${env.SERVER_HOST}:${env.SERVER_PORT}`
const HOSTNAME = `${baseUrl}/messaging`;
const ADVERTISINGS_ENDPOINT = `${baseUrl}/advertising/screen`
const COURSES_ENDPOINT = `${baseUrl}/course/sector`
const SCREEN_ID = getUrlParameter('id')
let sectorData = null
let advertisingData = []
let coursesData = []

function contentFromAdvertising(anAdvertising) {
	switch (anAdvertising?.advertisingTypeId || anAdvertising?.advertisingType?.id) {
		case 3:
			return {
				html: `<div class="flex items-center justify-center w-full h-full">${anAdvertising.payload}</div>`
			}
		case 2:
			return {
				html: `<div class="flex w-full h-full" id="${getYouTubeVideoId(anAdvertising.payload)}"></div>`,
				videoId: getYouTubeVideoId(anAdvertising.payload)
			}
		case 1:
			return {
				html: `<img class="flex h-full w-full" src="${anAdvertising.payload}" alt="${anAdvertising.name}" srcset="">`
			}
		default:
			return 'Unknown type'
	}
}

const subdivisions = (data, numDivisions) => {
  const chunkSize = Math.ceil(data.length / numDivisions);
  return Array.from({ length: numDivisions }, (_, i) =>
    data.slice(i * chunkSize, (i + 1) * chunkSize)
  );
};

function divisionsPerTemplate() {
	switch (sectorData?.screen?.templeteId || '3') {
		case '1':
			return 2
		case '2':
			return 3
		default:
			return 1
	}
}

function regenerateAdvertisings() {
	const divisions = divisionsPerTemplate()

	let advertisingDataToDisplay = advertisingData
	if (sectorData?.screen?.templeteId === '3') {
		advertisingDataToDisplay = advertisingData.filter(anAdvertising => {
			const idType = anAdvertising?.advertisingTypeId || anAdvertising?.advertisingType?.id
			return idType === 2
		})
	}

	let advertisingSubdivisions = subdivisions(advertisingDataToDisplay, divisions);


	advertisingSubdivisions
		.filter(advertisingsList => advertisingsList.length)
		.forEach((advertisingsList, index) => {
			initializeCarousel($, index + 1, {
				items: [...advertisingsList].map(anAdvertising => {
					const contentGenerated = contentFromAdvertising(anAdvertising)

					return {
						content: `<div class='carousel-item'>${contentGenerated?.html}</div>`,
						video: contentGenerated?.videoId,
						duration: anAdvertising?.advertisingSectors[0]?.sector?.screens[0]?.advertisingIntervalTime || 5
					}
				}),
			})
		})

	// for (const advertisingsList of advertisingSubdivisions) {
	// 	const contentGenerated = contentFromAdvertising(anAdvertising)?.videoId
	

	// 	initializeCarousel($, index + 1, {
	// 		items: [...advertisingsList].map(anAdvertising => ({
	// 			content: `<div class='carousel-item'>${contentGenerated?.html}</div>`,
	// 			video: contentGenerated?.videoId,
	// 			duration: anAdvertising?.advertisingSectors[0]?.sector?.screens[0]?.advertisingIntervalTime || 5
	// 		})),
	// 	})
	// }
}

function regenerateCoursesTable(){
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
								<td>${aCourse?.subject?.name || aCourse.subject}</td>
								<td>${aCourse?.name}</td>
								<td>${aCourse?.classroom?.name || aCourse?.classroom}</td>
								<td>${formattedTime(aCourse?.schedule?.startHour || aCourse?.startHour)} - ${formattedTime(aCourse?.schedule?.endHour	|| aCourse?.endHour)}</td>
							</tr>`
						).join('')
					}
				</tbody>
			</table>`,
			duration: 5
		})
		),
	}, 'table')
}

function loadTemplate() {
	let templateName = 'default'
	switch (sectorData?.screen?.templeteId || '3') {
		case '1':
			templateName = 'default'
			break
		case '2':
			templateName = 'advertisings'
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

		switch (sectorData?.screen?.templeteId || '1') {
			case '1':
				loadDefaultTemplate()
				break
			case '2':
				loadDefaultTemplate()
				break
			case '3':
				loadDefaultTemplate()
				break
		}
	})
}

function loadDefaultTemplate() {
		regenerateAdvertisings()
		regenerateCoursesTable()
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

	console.info(`
		ON MESSAGE:
		${message},
		${data}
	`)

	sectorData = data?.data

	switch (data?.action) {
		case 'START_CONNECTION':
			retrieveInitialData()
			break
		case 'CREATE_ADVERTISING':
			// Se crea el ADV
			advertisingData = [
				...advertisingData,
				data?.data
			]
			regenerateAdvertisings()
			break
		case 'UPDATE_ADVERTISING':
			// Se actualiza el ADV
			const advertisingId = advertisingData.findIndex(anItem => anItem.id === data?.data.advertisingId)

			if (advertisingId === -1) {
				console.error('NO ADVERTISING WITH THE ID')
				return
			}

			const currentAdvertising = advertisingData[advertisingId]
			advertisingData[advertisingId] = {
				...currentAdvertising,
				...data?.data
			}

			regenerateAdvertisings()
			break
		case 'DELETE_ADVERTISING':
			// Se elimina el ADV
			advertisingData = advertisingData.filter(anAdvertising => anAdvertising.id !== data?.data.advertisingId)
			regenerateAdvertisings()
			break
		case 'CREATE_COURSES':
			// Se crea la comision
			coursesData = data?.data
			regenerateCoursesTable()
			break
		case 'UPDATE_SCREEN_CONFIGURATION':
			// Se actualiza la configuracion de pantalla
			initilizeConnection()
			break
		case 'SCREEN_REMOTE_DISCONNECT':
			// Se desconecta la pantalla
			finalizeConnection()
			$('#sector_name').text('Has sido desconectado')
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
		// retrieveInitialData()
	} catch (error) {
		console.error(JSON.stringify(error))
		$("#loader").text(`Error: ${JSON.stringify(error)}`)
	}
}

$(document).ready(main);

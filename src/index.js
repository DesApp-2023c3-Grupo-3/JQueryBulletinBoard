import { connection, initilizeConnection, sendMessage } from "./modules/webSocketConnection.js";
import { getUrlParameter } from "./modules/utils.js";

const SCREEN_ID = getUrlParameter('id')
let billboardData = null
let lastMessage = null

function loadTemplate(data) {
    let templateName = 'default'
    
    switch ('1') { //billboardData?.templateId
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
    
    $('#main').load('./templates/' + templateName + '.html', () => appendMessage(data))
}

function onConnectionInitialized(response) {
    // console.info(`ON-OPEN: ${JSON.stringify(response)}`)
    $("#loader").text(`Connected to the WebSocket server.`)

    sendMessage('START_CONNECTION', SCREEN_ID)
}


function appendMessage(data) {
    $('#sector_name').text(`${billboardData?.sector?.name || 'No name'}`)
    
    $("#advertisings").append(`
        <div>
            <h6>${JSON.stringify(data.action)}</h6>
            <p>${JSON.stringify(data?.data?.payload || data?.data?.sector?.name)}</p>
        </div>
    `)
}

function onMessage(message) {
    const { data } = JSON.parse(message.data);
    // console.info(`ON-MESSAGE: ${JSON.stringify(data)}`)

    if (billboardData === null) {
        billboardData = data.data
        loadTemplate(data)
        return
    }

    appendMessage(data)
}

const main = () => {
    $("#loader").text('Cargando')
    try {
        connection.onOpen = onConnectionInitialized
        connection.onMessage = onMessage
        initilizeConnection()
    } catch (error) {
        console.error(JSON.stringify(error))
        $("#loader").text(`Error: ${JSON.stringify(error)}`)
    }
}

$(document).ready(main);

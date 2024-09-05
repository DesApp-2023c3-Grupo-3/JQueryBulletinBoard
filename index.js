// import { sendMessage } from "./modules/webSocketConnection.js";
import { getUrlParameter } from "./modules/utils.js";

// const buildingName = 'Malvinas Argentinas'
let SCREEN_ID = getUrlParameter('id')

function loadTemplate() {
    let templateName = 'default'
    SCREEN_ID = getUrlParameter('id')
    
    switch (SCREEN_ID) {
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
    $('#main').load('./templates/' + templateName + '.html')
}

// function initializeConnection() {
//     document.title = `Cartelera UNAHUR - ${buildingName}`

//     loadTemplate()

//     $("#getAdvertisings").click(() => {
//         alert('GET ADVERTISINGS')
//     });
// }

function failedInitializationFallback() {
    loadTemplate()
}

const main = () => {
    try {
        sendMessage(SCREEN_ID, initializeConnection)
    } catch (error) {
        // console.error(`There was an unexpected error:`, error)
        failedInitializationFallback()
    }
}

// failedInitializationFallback()
$(document).ready(main);

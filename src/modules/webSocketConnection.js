import env from './env.js'

const url = `ws://${env.SERVER_HOST}:${env.SERVER_PORT}/messaging`;
let webSocket = null;

const connection = {
    onOpen: (screenId) => console.info(`WebSocket Connected ${screenId}`),
    onMessage: (message) => console.info(`New message: ${message}`),
    onError: (error) => console.error(`ERROR: ${error}`)
}

function initilizeConnection() {
    webSocket = new WebSocket(url);
    webSocket.addEventListener('open', connection.onOpen);
    webSocket.addEventListener('message', connection.onMessage);
    webSocket.addEventListener('error', connection.onError);
}

const sendMessage = (message, screenId) => {
    webSocket.send(
        JSON.stringify({
            screenId,
            message,
        }),
    );
}

export { connection, initilizeConnection, sendMessage };

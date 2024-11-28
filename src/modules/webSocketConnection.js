import env from './env.js'
const url = `${env.WS_SSL}://${env.SERVER_HOST}:${env.WS_PORT}/messaging`;
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

function finalizeConnection() {
    if (webSocket) {
        webSocket.removeEventListener('open', connection.onOpen);
        webSocket.removeEventListener('message', connection.onMessage);
        webSocket.removeEventListener('error', connection.onError);

        if (webSocket.readyState === WebSocket.OPEN) {
            webSocket.close(); // Gracefully close the connection
        }
        
        webSocket = null; // Reset the WebSocket instance
        console.info('WebSocket connection closed and cleaned up.');
    } else {
        console.warn('No WebSocket connection to finalize.');
    }
}

const sendMessage = (message, screenId) => {
    webSocket.send(
        JSON.stringify({
            screenId,
            message,
        }),
    );
}

export { connection, initilizeConnection, finalizeConnection, sendMessage };

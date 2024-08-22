const url = 'ws://localhost:1234/messaging';

const webSocket = new WebSocket(url);

console.log('estoy en el archivo')

const screenId = '1';

webSocket.addEventListener('open', () => {
    console.info(`WebSocket Connected ${url}`);
    webSocket.send(
        JSON.stringify({
            screenId,
            message: 'Hi! This is a client',
        }),
    );
});

webSocket.addEventListener('message', (message) => {
    const { data } = JSON.parse(message.data);
    $("#advertisings").append(`<p>${JSON.stringify(data.action)}</p>`)
    $("#advertisings").append(`<p>${JSON.stringify(data.data)}</p>`)
});

webSocket.addEventListener('error', (error) => {
    console.error(`ERROR: ${error}`);
});

const sendMessage = (message) => {
    webSocket.send(
        JSON.stringify({
            screenId,
            message,
        }),
    );
}

export default { sendMessage };

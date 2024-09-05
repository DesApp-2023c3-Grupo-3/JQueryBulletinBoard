const url = 'ws://localhost:1234/messaging';
const webSocket = new WebSocket(url);
// const screenId = '1';

webSocket.addEventListener('open', (screenId) => {
    console.info(`WebSocket Connected ${url}`);
    webSocket.send(
        JSON.stringify({
            screenId,
            message: 'Hi! This is a client',
        }),
    );
});

webSocket.addEventListener('message', (message) => {
    console.log('addEventListener.message')
    const { data } = JSON.parse(message.data);
    $("#advertisings").append(`<p>${JSON.stringify(data.action)}</p>`)
    $("#advertisings").append(`<p>${JSON.stringify(data.data)}</p>`)
});

webSocket.addEventListener('error', (error) => {
    console.error(`ERROR: ${error}`);
});

const sendMessage = (message, screenId) => {
    console.log('sendMessage')
    webSocket.send(
        JSON.stringify({
            screenId,
            message,
        }),
    );
}

export { sendMessage };

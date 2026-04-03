import { io } from 'socket.io-client';

export function connectToServer(serverUrl: string) {
    const socket = io(serverUrl);

    socket.on('connect', () => {
        console.log('Connected to server');
    });

    socket.on('message', (message: string) => {
        console.log('Received message:', message);
    });

    function sendMessage(message: string) {
        socket.emit('message', message);
    }

    return {
        sendMessage,
    };
}
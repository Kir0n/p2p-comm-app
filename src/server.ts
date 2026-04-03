import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

export function startServer(port: number) {
    server.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });

    io.on('connection', (socket) => {
        console.log('A client connected');

        socket.on('message', (msg) => {
            console.log('Message received:', msg);
            // Broadcast the message to all clients
            socket.broadcast.emit('message', msg);
        });

        socket.on('disconnect', () => {
            console.log('A client disconnected');
        });
    });
}
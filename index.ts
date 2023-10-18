import { WebSocket } from "ws";

const socket = new WebSocket('ws://localhost:5872', {
    headers: {
        Authorization: `Bearer ${'token'}`,
    }
})

socket.on('open', () => {
    console.log('connected!');
})

socket.on('message', (data) => {
    console.log('data: ', data.toString());
})

socket.on('ping', () => {
    console.log('PONG');
    socket.pong();
})
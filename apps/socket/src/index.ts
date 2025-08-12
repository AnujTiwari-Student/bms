import  { WebSocketServer } from 'ws';
import {client} from "@repo/prisma/client"

const wss = new WebSocketServer({ port: 3001 });

wss.on('connection', async (ws) => {
    await client.user.create({
        data: {
            username: "anuj",
            password: "test",
            email: "anuj@test.com"
        }
    })
    ws.send('Welcome to the chat!');
});
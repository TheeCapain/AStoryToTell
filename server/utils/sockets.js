import express from "express";
import http from "http";
import { Server } from "socket.io"
const app = express();



const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

httpServer.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});

export default io
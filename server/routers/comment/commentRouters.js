import express from "express";
import { Router } from 'express';
import { Server } from "socket.io"
import http from "http";
import db from '../../database/connection_sqlite.js'


const app = express();
const commentRouter = Router();
const httpServer = http.createServer(app);


const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    socket.emit("hello", "world");
});

io.on("connection", (socket) => {
    socket.on("get comments", async (arg) => {
        const data = await db.all(`SELECT * FROM comments 
        INNER JOIN users
        ON users.user_id = comments.fk_user_id
        WHERE fk_post_id=?`, [arg]);
        console.log("Sending comments back");
        io.emit("send comments", data)
    });
});

httpServer.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});


commentRouter.get("/api/comments/test", async (req, res) => {
    const data = await db.all(`SELECT * FROM comments 
    INNER JOIN users
    ON users.user_id = comments.fk_user_id
    WHERE fk_post_id=?`, [req.body.id]);

    res.send({ comments: data });
})

commentRouter.post("/api/comments", async (req, res) => {
    console.log(req.body)
    const data = await db.run(`INSERT INTO comments(fk_user_id, fk_post_id, comment_content) VALUES(?,?,?)`,
        [req.body.userId, req.body.postId, req.body.comment]);
    res.send({ comments: data });
})

commentRouter.post("/api/comments/id", async (req, res) => {
    const data = await db.all(`SELECT * FROM comments 
    INNER JOIN users
    ON users.user_id = comments.fk_user_id
    WHERE fk_post_id=?`, [req.body.id]);
    res.send({ comments: data });
})

commentRouter.post("/api/comments", async (req, res) => {
    const data = await db.all("SELECT * FROM comments;");
    console.log(data)
    res.send({ comments: data });
})

export default commentRouter;
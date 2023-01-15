
import { Router } from 'express';
import db from '../database/connection_sqlite.js'
import io from "../utils/sockets.js";


const commentRouter = Router();


io.on("connection", (socket) => {
    socket.on("deletepostcomment", async (arg) => {
        console.log(arg.id)
        await db.run(`DELETE FROM comments WHERE comment_id=?`, [arg.id])
        io.emit("update comments", arg)
    });
});

io.on("connection", (socket) => {
    socket.on("insertComment", async (arg) => {
        console.log(arg)
        const data = await db.run(`INSERT INTO comments(fk_user_id, fk_post_id, comment_content, comment_date) VALUES(?,?,?,?)`,
            [arg.userId, arg.postId, arg.comment, arg.date]);
        io.emit("update comments", arg)
    });
});

commentRouter.delete("/api/comments/delete", async (req, res) => {
    console.log(req.body.id)
    await db.run(`DELETE FROM comments WHERE comment_id=?`, [req.body.id])
    res.send({ message: "Deleted from DB" })
})

commentRouter.get("/api/comments/test", async (req, res) => {
    const data = await db.all(`SELECT * FROM comments 
    INNER JOIN users
    ON users.user_id = comments.fk_user_id
    WHERE fk_post_id=?`, [req.body.id]);
    res.send({ comments: data });
})

commentRouter.post("/api/comments", async (req, res) => {
    const data = await db.run(`INSERT INTO comments(fk_user_id, fk_post_id, comment_content, comment_date) VALUES(?,?,?,?)`,
        [req.body.userId, req.body.postId, req.body.comment, req.body.date]);
    res.send({ comments: data });
})

commentRouter.post("/api/comments/id", async (req, res) => {
    const data = await db.all(`SELECT * FROM comments 
    INNER JOIN users
    ON users.user_id = comments.fk_user_id
    WHERE fk_post_id=?`, [req.body.id]);
    res.send({ comments: data });
})

commentRouter.get("/api/comments", async (req, res) => {
    const data = await db.all("SELECT * FROM comments;");
    res.send({ comments: data });
})

export default commentRouter;
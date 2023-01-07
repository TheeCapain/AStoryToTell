
import { Router } from 'express';


import db from '../../database/connection_sqlite.js'
const commentRouter = Router();


/*
io.on("update comments", (socket) => {
    socket.on("client asks for comments", async (data) => {
        console.log("In backend sockets")
        data.comments = await db.all(`SELECT * FROM comments 
        INNER JOIN users
        ON users.user_id = comments.fk_user_id
        WHERE fk_post_id=?`, [req.body.id]);
        console.log("In backend sockets")
        io.emit("update comments", data)

    })
})
*/

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
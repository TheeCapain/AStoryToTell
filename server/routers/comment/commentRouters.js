import { Router } from 'express';
import db from '../../database/connection_sqlite.js'

const commentRouter = Router();

commentRouter.get("/api/comments/test", async (req, res) => {
    const data = await db.all(`SELECT * FROM comments 
    INNER JOIN users
    ON users.user_id = comments.fk_user_id
    WHERE fk_post_id=1`);
    console.log(data)
    res.send({ comments: data });
})

commentRouter.post("/api/comments", async (req, res) => {
    const data = await db.all(`SELECT * FROM comments 
    INNER JOIN users
    ON users.user_id = comments.fk_user_id
    WHERE fk_post_id=?`, [req.body.id]);
    console.log(data)
    res.send({ comments: data });
})


commentRouter.post("/api/comments", async (req, res) => {
    const data = await db.all("SELECT * FROM comments;");
    console.log(data)
    res.send({ comments: data });
})

export default commentRouter;
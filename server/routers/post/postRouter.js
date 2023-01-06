import { Router } from 'express';
import db from '../../database/connection_sqlite.js'

const postRouter = new Router()

postRouter.get("/api/post/test", async (req, res) => {
    const data = await db.all(`SELECT  * FROM posts
    INNER JOIN users ON users.user_id = posts.fk_user_id`);
    res.send({ posts: data });
})

postRouter.get("/api/posts", async (req, res) => {
    const data = await db.all(`SELECT  * FROM posts
    INNER JOIN users ON users.user_id = posts.fk_user_id`);
    res.send({ posts: data });
})

postRouter.post("/api/posts/id", async (req, res) => {
    const data = await db.all("SELECT * FROM posts where fk_user_id =?;", [req.body.id])
    res.send({ posts: data })
})
//Kan denne sættes sammen med ID kaldet for atminimere kald til DB?
postRouter.post("/api/countpost", async (req, res) => {
    const count = await db.get("SELECT COUNT(*) AS amount FROM posts WHERE fk_user_id =?", [req.body.id])
    res.send({ postAmount: count.amount })
})

postRouter.post("/api/posts", async (req, res) => {
    if (req.body.userid && req.body.title && req.body.content) {
        await db.run("INSERT INTO posts (fk_user_id, post_title, post_content) VALUES(?,?,?)",
            [req.body.userid, req.body.title, req.body.content])
        res.status(200).send({ message: "Data was inserted" })
    }
})


export default postRouter
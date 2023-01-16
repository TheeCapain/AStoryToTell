import { Router } from 'express';
import db from '../database/connection_sqlite.js'
import io from "../utils/sockets.js";
import { loginAuth } from '../utils/middleware.js';

const postRouter = new Router()

io.on("connection", (socket) => {
    socket.on("delete posts", async (arg) => {
        await db.run(`DELETE FROM posts WHERE post_id=?`, [arg.id])
        io.emit("update posts", arg)
    })
})


postRouter.delete("/api/posts/deletes", async (req, res) => {
    await db.run(`DELETE FROM posts WHERE post_id=?`, [req.body.id])
    res.send({ message: "Deleted from DB" })
})

postRouter.get("/api/post/test", async (req, res) => {
    const data = await db.all(`SELECT * FROM posts WHERE post_category = "filmmaking"`);
    res.send({ posts: data });
});

postRouter.get("/api/posts/filmmaking", async (req, res) => {
    const data = await db.all(`SELECT posts.post_id, posts.post_title, posts.post_content, posts.post_date, users.user_id, users.user_name FROM posts 
    INNER JOIN users ON users.user_id = posts.fk_user_id
    WHERE posts.post_category = "filmmaking"`);
    res.send({ posts: data });
});

postRouter.get("/api/posts/writing", async (req, res) => {
    const data = await db.all(`SELECT posts.post_id, posts.post_title, posts.post_content, posts.post_date, users.user_id, users.user_name FROM posts 
    INNER JOIN users ON users.user_id = posts.fk_user_id
    WHERE posts.post_category = "writing"`);
    res.send({ posts: data });
});

postRouter.get("/api/posts/music", async (req, res) => {
    const data = await db.all(`SELECT posts.post_id, posts.post_title, posts.post_content, posts.post_date, users.user_id, users.user_name FROM posts 
    INNER JOIN users ON users.user_id = posts.fk_user_id
    WHERE posts.post_category = "music"`);
    res.send({ posts: data });
});

postRouter.post("/api/posts/id", async (req, res) => {
    const data = await db.all("SELECT * FROM posts WHERE fk_user_id =?;", [req.body.id])
    res.send({ posts: data })
});

postRouter.post("/api/countpost", async (req, res) => {
    const count = await db.get("SELECT COUNT(*) AS amount FROM posts WHERE fk_user_id =?", [req.body.id])
    res.send({ postAmount: count.amount })
});

postRouter.post("/api/posts", loginAuth, async (req, res) => {
    if (req.body.userid && req.body.title && req.body.content) {
        await db.run("INSERT INTO posts (fk_user_id, post_category, post_title, post_content, post_date) VALUES(?,?,?,?,?)",
            [req.body.userid, req.body.category, req.body.title, req.body.content, req.body.date])
        res.status(200).send({ message: "Data was inserted" })
    } else {
        res.status(400).send({ message: "Error" })
    }
});


export default postRouter
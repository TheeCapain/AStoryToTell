import express from "express";
import { Router } from 'express';
import db from '../../database/connection_sqlite.js'

const app = express();
const postRouter = new Router()

postRouter.delete("/api/posts/delete", async (req, res) => {
    console.log(req.body)
    await db.run(`DELETE FROM posts WHERE post_id=?`, [req.body.id])
    res.send({ message: "Deleted from DB" })
})

postRouter.get("/api/post/test", async (req, res) => {
    const data = await db.all(`SELECT * FROM posts WHERE post_category = "filmmaking"`);
    res.send({ posts: data });
});

postRouter.get("/api/posts/filmmaking", async (req, res) => {
    const data = await db.all(`SELECT posts.post_id, posts.post_title, posts.post_content, users.user_id, users.user_name FROM posts 
    INNER JOIN users ON users.user_id = posts.fk_user_id
    WHERE posts.post_category = "filmmaking"`);
    res.send({ posts: data });
});

postRouter.get("/api/posts/writing", async (req, res) => {
    const data = await db.all(`SELECT posts.post_id, posts.post_title, posts.post_content, users.user_id, users.user_name FROM posts 
    INNER JOIN users ON users.user_id = posts.fk_user_id
    WHERE posts.post_category = "writing"`);
    res.send({ posts: data });
});

postRouter.post("/api/posts/id", async (req, res) => {
    const data = await db.all("SELECT * FROM posts WHERE fk_user_id =?;", [req.body.id])
    res.send({ posts: data })
});
//Kan denne sættes sammen med ID kaldet for atminimere kald til DB?
postRouter.post("/api/countpost", async (req, res) => {
    const count = await db.get("SELECT COUNT(*) AS amount FROM posts WHERE fk_user_id =?", [req.body.id])
    res.send({ postAmount: count.amount })
});

postRouter.post("/api/posts", async (req, res) => {
    if (req.body.userid && req.body.title && req.body.content) {
        await db.run("INSERT INTO posts (fk_user_id, post_title, post_content) VALUES(?,?,?)",
            [req.body.userid, req.body.title, req.body.content])
        res.status(200).send({ message: "Data was inserted" })
    }
});


export default postRouter
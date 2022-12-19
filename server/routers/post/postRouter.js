import { Router } from 'express';
import db from '../../database/connection_sqlite.js'

const postRouter = new Router()


postRouter.get("/api/posts", async (req, res) => {
    const data = await db.all("SELECT * FROM posts;");
    console.log(data)
    res.send({ data });
})


postRouter.get("/api/posts/wid", async (req, res) => {
    const data = await db.all("SELECT * FROM posts WHERE user_id=?", [2])
    console.log(data)
    res.send({ data })
})

postRouter.post("/api/posts", async (req, res) => {
console.log("In a post request")
console.log(req.body.post_title)
if(req.body.user_id && req.body.post_title && req.body.post_content){
await db.run("INSERT INTO posts (user_id, post_title, post_content) VALUES(?,?,?)", [req.body.user_id, req.body.post_title, req.body.post_content])
res.status(200).send({message: "Data was inserted"})
}

})


export default postRouter
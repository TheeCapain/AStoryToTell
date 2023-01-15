import { Router } from 'express';
import db from '../database/connection_sqlite.js'

const bookmarkRouter = Router()

bookmarkRouter.get("/api/bookmarks", async (req, res) => {
    const bookmarks = await db.all("SELECT * FROM bookmarks");
    res.send({ bookmarks });
})

bookmarkRouter.post("/api/bookmarks/id", async (req, res) => {
    console.log(req.body)
    const bookmarks = await db.all(`SELECT * FROM bookmarks 
    INNER JOIN posts
    ON posts.post_id = bookmarks.fk_post_id
    WHERE bookmarks.fk_user_id = ? `, [req.body.id]);
    res.send({ data: bookmarks });
})

bookmarkRouter.post("/api/bookmarks", async (req, res) => {
    console.log(req.body)
    console.log(req.body.userId)
    console.log(req.body.postId)
    
    let bookmark = await db.get(`SELECT * FROM bookmarks WHERE fk_user_id=? AND fk_post_id=?`, [req.body.userId, req.body.postId])
        console.log(bookmark)
    if (bookmark) {
        await db.run(`DELETE FROM bookmarks WHERE fk_user_id=? AND fk_post_id=?`, [req.body.userId, req.body.postId])
        console.log("Deleted bookmark")
    } else {
        const bookmarks = await db.run(`INSERT INTO bookmarks (fk_user_id, fk_post_id) VALUES(?,?)`,
            [req.body.userId, req.body.postId]);
        console.log("Created bookmark")
        res.send({ data: bookmarks });
    }
})

export default bookmarkRouter
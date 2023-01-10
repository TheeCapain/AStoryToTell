import { Router } from 'express';
import db from '../database/connection_sqlite.js'

const bookmarkRouter = Router()

bookmarkRouter.get("/api/bookmarks", async (req, res) => {
    const bookmarks = await db.all("SELECT * FROM bookmarks");
    res.send({ bookmarks });
})

bookmarkRouter.get("/api/bookmarks/id", async (req, res) => {
    const bookmarks = await db.all(`SELECT * FROM bookmarks 
    INNER JOIN posts
    ON posts.post_id = bookmarks.fk_post_id
    WHERE bookmarks.fk_user_id = 1 `);
    res.send({ bookmarks });
})

export default bookmarkRouter
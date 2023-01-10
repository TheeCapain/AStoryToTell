import { Router } from 'express';
import db from '../database/connection_sqlite.js'

const bookmarkRouter = Router()

bookmarkRouter.get("/api/bookmarks", async (req, res) => {
    const bookmarks = await db.all("SELECT * FROM bookmarks");
    res.send({ bookmarks });
})

bookmarkRouter.post("/api/bookmarks", async (req, res) => {
    const bookmarks = await db.all(`SELECT * FROM bookmarks WHERE bookmarks.fk_user_id = 1
    INNER JOIN `);
    res.send({ bookmarks });
})

export default bookmarkRouter
import {Router} from 'express';
import db from '../../database/connection_sqlite.js'

const commentRouter = Router();

commentRouter.get("/api/comments", async (req, res) => {
    const data = await db.all("SELECT * FROM comments;");
    res.send({ data });
})


export default commentRouter;
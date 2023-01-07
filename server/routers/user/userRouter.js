import { Router } from 'express';
import db from '../../database/connection_sqlite.js'

const userRouter = Router();

userRouter.get("/api/users", async (req, res) => {
    const data = await db.all("SELECT * FROM users;");
    res.send({ data });
})

userRouter.post("/api/users/id", async (req, res) => {
    const data = await db.all(`SELECT * FROM users where user_id=?`, [req.body.id])
    res.send({ info: data });
})

export default userRouter;
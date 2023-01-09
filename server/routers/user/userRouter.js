import { Router } from 'express';
import db from '../../database/connection_sqlite.js'

const userRouter = Router();




userRouter.get("/api/users", async (req, res) => {
    const data = await db.all("SELECT user_id, user_name, user_mail, user_bio FROM users INNER JOIN comments on comments.fk_user_id = users.user_id;");
    res.send({ data });
})

userRouter.post("/api/users/id", async (req, res) => {
    const data = await db.all(`SELECT * FROM users where user_id=?`, [req.body.id])
    res.send({ info: data });
})

export default userRouter;
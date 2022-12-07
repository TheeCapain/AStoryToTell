import { Router } from 'express'
import db from '../../database/connection_sqlite.js'
import { passwordCompare } from '../../utils/encryption.js';

const loginRouter = Router();

loginRouter.post("/api/login", async (req, res, next) => {

    console.log("We are in login backend")


    const user = await db.get("SELECT * FROM users WHERE user_mail=?", [req.body.email])
    if (user) {
        if (await passwordCompare(req.body.password, user.user_pw)) {
            console.log(user)
            return res.json({ user })
        }
    } else {
        res.status(400).send({ message: "Wrong email or password" });
    }


});


export default loginRouter
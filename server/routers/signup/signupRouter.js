import { Router } from 'express'
import db from '../../database/connection_sqlite.js'
import { passwordHashing } from "../../utils/encryption.js";
import { handleEmail } from '../mail/mailRouter.js';

const signupRouter = Router();



signupRouter.post("/api/signup", async (req, res, next) => {
    console.log("We are in backend")
    const user = await db.run("SELECT * FROM users WHERE user_mail=?", [req.body.email])

    if (req.body.username && req.body.email && req.body.password) {
        let hashedPw = await passwordHashing(req.body.password)
        await db.run(`INSERT INTO users (user_name, user_mail, user_pw) VALUES (?, ?, ?)`, [req.body.username, req.body.email, hashedPw])
        handleEmail(req.body.email)
        res.status(200).send({ user: user.user_name });
    } else {
        console.log("error fields");
        res.status(400).send({ message: "Asign the information fields" });
    }


})



export default signupRouter;
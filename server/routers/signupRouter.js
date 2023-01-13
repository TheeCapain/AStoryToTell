import { Router } from 'express'
import db from '../database/connection_sqlite.js'
import { passwordHashing } from "../utils/encryption.js";
import { handleEmail } from './mailRouter.js';

const signupRouter = Router();

signupRouter.post("/api/signup", async (req, res, next) => {
    console.log("We are in backend")

    const user = await db.get("SELECT * FROM users WHERE user_mail=?", [req.body.email])
    if (user) {
        console.log(user)
        console.log(user.user_mail)
        if (user.user_mail === req.body.email) {
            console.log("user exists")
            res.status(400).send({ message: "User already exists" })
        }
    } else if (req.body.username && req.body.email && req.body.password) {
        let hashedPw = await passwordHashing(req.body.password)
        await db.run(`INSERT INTO users (user_name, user_mail, user_pw) VALUES (?, ?, ?)`, [req.body.username, req.body.email, hashedPw])
        handleEmail(req.body.email)
        res.status(200).send({ user: req.body.username });
    } else {
        console.log("error fields");
        res.status(400).send({ message: "Asign the information fields" });
    }

})



export default signupRouter;
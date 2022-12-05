import { Router } from 'express'
import db from '../../database/connection_sqlite.js'
import bcrypt from 'bcrypt'

const signupRouter = Router();
const saltRounds = 10;

const salt = bcrypt.genSaltSync(saltRounds);

function hashPW(pw) {
    const hashedPW = bcrypt.hashSync(pw, salt);
    return hashedPW
}


signupRouter.get("/api/signup", async (req, res) => {
    console.log(req.body.email)

    const hashedPw = hashPW(req.body.pswd)

    console.log(hashedPw)
    await db.run(`INSERT INTO users (user_mail, user_pw) VALUES (?, ?)`, [req.body.email, hashedPw])

})



export default signupRouter;
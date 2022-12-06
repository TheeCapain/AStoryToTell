import { Router } from 'express'
import db from '../../database/connection_sqlite.js'
import { passwordCompare } from '../../utils/encryption.js';

const loginRouter = Router();

loginRouter.post("/api/login", async (req, res, next) => {

    console.log("We are in login backend")
    const user = await db.get("SELECT * FROM users WHERE user_mail=?", [req.body.email])

    console.log(req.body.password)
    console.log(user.user_pw)


    let passwordMatch;
    if (user) {
        let passwordMatch = await passwordCompare(req.body.password, user.user_pw);
        console.log(passwordMatch);
    }

    if (passwordMatch) {
      res.send(user.user_name)
    } else {
        res.status(400).send({ message: "Wrong email or password" });
    }

});


export default loginRouter
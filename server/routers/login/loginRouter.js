import { response, Router } from 'express'
import db from '../../database/connection_sqlite.js'
import { passwordCompare } from '../../utils/encryption.js';

const loginRouter = Router();

loginRouter.post("/api/login", async (req, res, next) => {

    console.log("We are in login backend")
    console.log(req.body)

    //Sørg for der er en bruger for at komme tilbage
    const user = await db.get("SELECT * FROM users WHERE user_mail=?", [req.body.email])
    if (user) {
        console.log("there is a user")

        if (await passwordCompare(req.body.password, user.user_pw)) {
            console.log("Password match")
            console.log(user)
            return res.send(user);
        }
    } else {
        console.log("some error")
        res.status(400).send({ message: "Wrong email or password" });
    }


});

loginRouter.get("/logout", (req, res) => {

})


export default loginRouter
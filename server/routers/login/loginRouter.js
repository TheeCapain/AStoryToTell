import { Router } from 'express'
import bcrypt from 'bcrypt'
const loginRouter = Router();

loginRouter.get("/api/login", async (req, res, next) => {

    const user = await db.get("SELECT * FROM users WHERE user_mail=?", [req.body.email])
    const istrue = bcrypt.compare(req.body.password, user.user_pw)

    if (istrue) {
        console.log("session is set");
    } else {
        console.log("test")
        res.status(400).send({ message: "Wrong email or password" });
    }

});

export default loginRouter
import { Router } from 'express'
import db from '../database/connection_sqlite.js'
import { passwordCompare } from '../utils/encryption.js';
import { loginAuth } from '../utils/middleware.js';



const loginRouter = Router();

loginRouter.post("/api/login", async (req, res) => {
    const user = await db.get("SELECT * FROM users WHERE user_mail=?", [req.body.email])
    if (user) {
        if (await passwordCompare(req.body.password, user.user_pw)) {
            req.session.isLoggedIn = true
            req.session.userId = user.user_id
            res.status(200).send({
                username: user.user_name,
                userid: user.user_id,
            });

        }
    } else {
        res.status(400).send({ message: "Wrong email or password" });
    }


});

loginRouter.get("/logout", (req, res) => {
req.session.destroy();
res.send({});
});


export default loginRouter
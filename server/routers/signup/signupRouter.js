import { response, Router } from 'express'
import db from '../../database/connection_sqlite.js'
import { passwordHashing } from "../../utils/encryption.js";

const signupRouter = Router();



signupRouter.post("/api/signup", async (req, res) => {
    console.log("We are in backend")
    
    if (req.body.username && req.body.email && req.body.password) {
        let hashedPw = await passwordHashing(req.body.password)
        await db.run(`INSERT INTO users (user_name, user_mail, user_pw) VALUES (?, ?, ?)`, [req.body.username, req.body.email, hashedPw])
    } else {
        console.log("error fields");
        res.status(400).send({ message: "Asign the information fields" });
    }
    res.send(response.ok)

})



export default signupRouter;
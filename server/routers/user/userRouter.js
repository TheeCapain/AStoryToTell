import {Router} from 'express';
import db from '../../database/connection_sqlite.js'

const userRouter = Router();

userRouter.get("/api/users", async (req, res) => {
    const data = await db.all("SELECT * FROM users;");
    res.send({ data });
})

userRouter.get("/api/users/id", async(req,res)=>{
    
})

export default userRouter;
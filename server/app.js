import express from "express";
const app = express();
app.use(express.json());
//CORS
import cors from "cors";
app.use(cors());
//USER ROUTER
import userRouter from './routers/user/userRouter.js';
app.use(userRouter)
//SIGNUP ROUTER
import signupRouter from './routers/signup/signupRouter.js'
app.use(signupRouter)
//LOGIN ROUTER
import loginRouter from './routers/login/loginRouter.js'
app.use(loginRouter)
import mailRouter from "./routers/mail/mailRouter.js";
app.use(mailRouter)

app.use(express.json());

app.get("/",(res, req)=>{
    res.send({message: "Hello world"})
})

const PORT = 8080 || process.env.PORT;
app.listen(PORT, ()=> console.log("Server running on port", PORT))
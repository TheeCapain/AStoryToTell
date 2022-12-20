import express from "express";
import dotenv from "dotenv"

dotenv.config()

const app = express();
app.use(express.json());
//CORS LÆS OP PÅ HVAD DET HELT PRÆCIST ER
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
//MAIL ROUTER
import mailRouter from "./routers/mail/mailRouter.js";
app.use(mailRouter)
//POSTROUTER
import postRouter from "./routers/post/postRouter.js";
app.use(postRouter)
import commentRouter from "./routers/comment/commentRouters.js";
app.use(commentRouter)
app.use(express.json());

app.get("/", (res, req) => {
    res.send({ message: "Hello world" })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("Server running on port", PORT))
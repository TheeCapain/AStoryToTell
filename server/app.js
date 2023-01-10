import express from "express";
import dotenv from "dotenv"

dotenv.config()
const app = express();

app.use(express.json());
//læs op på de her sessions
import session from "express-session"
//CORS LÆS OP PÅ HVAD DET HELT PRÆCIST ER
import cors from "cors";
app.use(cors());
//USER ROUTER
import userRouter from "./routers/userRouter.js";
app.use(userRouter)
//SIGNUP ROUTER
import signupRouter from './routers/signupRouter.js'
app.use(signupRouter)
//LOGIN ROUTER
import loginRouter from './routers/loginRouter.js'
app.use(loginRouter)
//MAIL ROUTER
import mailRouter from "./routers/mailRouter.js";
app.use(mailRouter)
//POSTROUTER
import postRouter from "./routers/postRouter.js";
app.use(postRouter)
//COMMENTROUTER
import commentRouter from "./routers/commentRouters.js";
app.use(commentRouter)
//BOOKMARKROUTER
import bookmarkRouter from "./routers/bookmarkRouter.js"
app.use(bookmarkRouter)

app.use(express.json());

app.get("/", (res, req) => {
    res.send({ message: "Hello world" })
})

const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("Server running on port", PORT))
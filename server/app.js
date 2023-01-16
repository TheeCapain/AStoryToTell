import express from "express";
import dotenv from "dotenv"
import session from "express-session"
import cors from "cors";
const app = express();
app.use(cors({ credentials: true, origin: true }));
app.use(express.json());
//michala session 7 nodejs
//læs op på de her sessions
dotenv.config()

app.use(session({
    secret: "signs a cookie",
    resave: false,
    saveUninitialized: false
}))

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

app.get("/", (req, res) => {
    req.session.isAuth = true
    res.send("test")
})


const PORT = process.env.PORT || 8080

app.listen(PORT, () => console.log("Server running on port", PORT))


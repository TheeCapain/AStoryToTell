import express from "express";
import { Server } from "socket.io"
import dotenv from "dotenv"
import http from "http";

dotenv.config()
const app = express();

app.use(express.json());
//læs op på de her sessions
import session from "express-session"

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
//COMMENTROUTER
import commentRouter from "./routers/comment/commentRouters.js";
app.use(commentRouter)
//Session wrapper

app.use(express.json());

app.get("/", (res, req) => {
    res.send({ message: "Hello world" })
})

const PORT = process.env.PORT || 8080

const httpServer = http.createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
    },
});

io.on("connection", (socket) => {
    socket.emit("hello", "world");
});

io.on("connection", (socket) => {
    socket.on("hello", (arg) => {
        console.log(arg); // world
    });
});

io.on("connection", (socket) => {
    console.log("We are live and connected");
    console.log(socket.id);
});

httpServer.listen(3000, () => {
    console.log(`Example app listening on port ${3000}`);
});


app.listen(PORT, () => console.log("Server running on port", PORT))
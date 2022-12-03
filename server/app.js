import express from "express";
const app = express();

import userRouter from './routers/user/userRouter.js';
app.use(userRouter)

app.use(express.json());

app.get("/",(res, req)=>{
    res.send({message: "Hello world"})
})

const PORT = 8080 || process.env.PORT;
app.listen(PORT, ()=> console.log("Server running on port", PORT))
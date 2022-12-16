import { Router } from 'express'
import nodemailer from 'nodemailer'

const mailRouter = Router()

mailRouter.post("/api/mails/welcome", async (req, res) => {
    console.log(req.body.email)
    const email = req.body.email
    //Validate if email exists in DB
    handleEmail()
})

async function handleEmail() {
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'AStoryToTell.confirmation@gmail.com',
            pass: 'gbmnjtudhkfnphao'
        }
    });

    let info = await transporter.sendMail({
        from: '"A Story To Tell Confirmation" <AStoryToTell.confirmation@gmail.com>',
        to: "Augusthauerslev@outlook.com",
        subject: "Welcome to the Weather",
        text: "You are now signed up to view the weather... didnt think youd have to",
        html: "<b>Hello world?</b>",
    });




    console.log("Message sent: %s", info.messageId);

    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

}


export default mailRouter
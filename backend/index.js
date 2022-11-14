import express from "express"
import mongoDB from "mongoose"
import cors from "cors";

import {loginValidation, registerValidation} from "./validations/auth.js";

import * as userController from "./controllers/userController.js";
import {checkAuth} from "./utils/checkAuth.js";
import nodemailer from "nodemailer";
import {html} from "./mailedHTML/mailedHTML.js";

export const secretJWTKey = 'secretKEY123123';


// Создание БД, подключение к ней и запуск приложения
mongoDB.connect('mongodb+srv://admin:2112368xzzx@cluster0.y9zyfq8.mongodb.net/vkdatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log("DataBase is up!")
    })
    .catch((err) => {
        console.log("DB error - ", err)
    })

const app = express();
app.use(express.json())
app.use(cors())


//   GET запросы
app.get('/auth/me', checkAuth, userController.getMe);

//  POST запросы
app.post('/auth/register', registerValidation, userController.register)

app.post('/auth/login', loginValidation, userController.login)

app.post('/forgotEmail', async (req, res) => {
    try {
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false,
            auth: {
                user: "igor.igor2013xz@gmail.com",
                pass: "ezjbwkegxmykctpk"
            }
        })

        let result = await transporter.sendMail({
            from: '"React VK" <igor.igor2013xz@gmail.com>',
            to: req.body.email,
            subject: 'Reset link',
            text: '',
            html: html,
        })
        res.status(200)
    } catch (err) {
        console.log(err)

        res.status(500).json({...err})
    }
})

// Запускаем сервер
app.listen(4444, (err) => {
    if (err) return console.log("Server error - ", err)

    console.log("Server is up!")
})
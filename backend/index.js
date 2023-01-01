import express from "express"
import mongoDB from "mongoose"
import cors from "cors";

import {loginValidation, registerValidation} from "./validations/auth.js";

import * as userController from "./controllers/userController.js";
import {checkAuth} from "./utils/checkAuth.js";
import {emailController} from "./controllers/emailController.js";

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

app.post('/forgotEmail', emailController)

// Запускаем сервер
app.listen(3001, (err) => {
    if (err) return console.log("Server error - ", err)

    console.log("Server is up!")
})
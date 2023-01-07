import express from "express"
import mongoDB from "mongoose"
import cors from "cors";

import {loginValidation, registerValidation} from "./validations/auth.js";
import fileMiddleware from "./middleware/fileMiddleware.js"

import * as userController from "./controllers/userController.js";
import {checkAuth} from "./utils/checkAuth.js";
import {emailController} from "./controllers/emailController.js";
import {fileController} from "./controllers/fileController.js";

export const secretJWTKey = 'secretKEY123123';

// Создание БД, подключение к ней и запуск приложения
mongoDB.connect('mongodb+srv://admin:2112368xzzx@cluster0.y9zyfq8.mongodb.net/vkdatabase?retryWrites=true&w=majority')
    .then(() => {
        console.log("DataBase is up!")
    })
    .catch((err) => {
        console.log("DataBase error - ", err)
    })

// app extension
const app = express();
app.use(express.json())
app.use(cors())
app.use('/uploads', express.static("uploads"))

// Методы
app.get('/auth/me', checkAuth, userController.getMe);

app.post('/auth/register', registerValidation, userController.register)

app.post('/auth/login', loginValidation, userController.login)

app.post('/forgotEmail', emailController)

app.post('/upload', fileMiddleware.single("avatar"), fileController)

// Запускаем сервер
app.listen(3001, (err) => {
    if (err) return console.log("Server error - ", err)

    console.log("Server is up!")
})
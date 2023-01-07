import {validationResult} from "express-validator";
import crypt from "bcrypt";
import UserModel from "../userModel/user.js";
import jwt from "jsonwebtoken";
import {secretJWTKey} from "../index.js";

// Тут хранится вся логика регистрации/авторизации + получение информации о себе

export const register = async (req, res) => {
    try {
        //Получаем ошибки валидации
        const errors = validationResult(req)

        // Если есть ошибки то отображаем их
        if (!errors.isEmpty()) {
            return res.status(400).json(errors.array())
        }

        // Хэшируем пароль
        const password = req.body.password;
        const salt = await crypt.genSalt(10)
        const hash = await crypt.hash(password, salt)

        // Создаём экземпляр пользователя
        const doc = new UserModel({
            email: req.body.email,
            fullName: req.body.fullName,
            passwordHash: hash,
            avatar: req.body.avatar
        })

        // Комитим в БД
        const user = await doc.save()

        // Создаём токен id юзера
        const token = jwt.sign({
            _id: user._id
        }, secretJWTKey, {
            expiresIn: '30d',
        })

        //Удаляем из ответа пароль
        const {passwordHash, ...userData} = user._doc;

        // Возвращаем ответ
        res.json({
            ...userData,
            token
        })
    } catch (err) {
        // Для фронта отправляем ответ ошибки
        res.status(500).json({
            message: "User already exists!"
        })

        console.log(err)
    }
}

export const login = async (req, res) => {
    try {
        // Ищем пользователя в БД
        const user = await UserModel.findOne({
            email: req.body.email,
        })

        // Если не нашли, то ошибка
        if (!user) {
            return res.status(404).json({
                message: "Wrong login or password"
            })
        }

        // Сравниваем пароли
        const isValidPass = await crypt.compare(req.body.password, user._doc.passwordHash)

        // Если не совпали, то ошибка
        if (!isValidPass) {
            return res.status(400).json({
                message: "Wrong login or password"
            })
        }

        // Создаём токен id юзера
        const token = jwt.sign({
            _id: user._id
        }, secretJWTKey, {
            expiresIn: '30d',
        })

        //Удаляем из ответа пароль
        const {passwordHash, ...userData} = user._doc;

        // Возвращаем ответ
        res.json({
            ...userData,
            token
        })
    } catch (err) {
        res.status(500).json({
            message: "Login error!"
        })
    }
}

export const getMe = async (req, res) => {
    try {
        const user = await UserModel.findById(req.userId)

        if (!user){
            return res.status(404).json ({
                message: "User not found",
            })
        }

        const {passwordHash, ...userData} = user._doc;

        // Возвращаем ответ
        res.json(userData)
    } catch (err) {
        console.log(err);

        res.status(500).json({
            message: "Not allowed authorization"
        })
    }
}
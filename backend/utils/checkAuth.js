import jwt from "jsonwebtoken";
import {secretJWTKey} from "../index.js";


// Проверка JWT токена

export const checkAuth = (req, res, next) => {
    const token = (req.headers.authorization || '').replace(/Bearer\s?/, '');

    if (token) {
        try {
            // noinspection JSCheckFunctionSignatures
            const decoded = jwt.verify(token, secretJWTKey)

            req.userId = decoded._id;

            next();
        } catch (err) {
            return res.status(403).json({
                message: "Not allowed authorization"
            })
        }
    } else {
        return res.status(403).json({
            message: "Not allowed authorization"
        })
    }
}
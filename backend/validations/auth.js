import {body} from "express-validator"

export const registerValidation = [
    body('email', 'Wrong email format!').isEmail(),
    body('password', 'Password must be more than 3 symbols and less than 16!').isLength({min: 3, max: 16}),
    body('fullName', "Name must be more that 5 symbols!").isLength({min: 5})
];

export const loginValidation = [
    body('email', 'Wrong email format!').isEmail(),
    body('password', 'Password must be more than 3 symbols and less than 16!').isLength({min: 3, max: 16})
];
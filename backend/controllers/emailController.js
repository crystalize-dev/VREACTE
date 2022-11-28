import nodemailer from "nodemailer";
import {html} from "../mailedHTML/mailedHTML.js";

export const emailController = async (req, res) => {
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

        res.status(200).json(result)
    } catch (err) {
        res.status(500).json({...err})
    }
}
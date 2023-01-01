import mongoDB from "mongoose"


// Тут хранится шаблон пользователя дл БД

const UserSchema = new mongoDB.Schema({
    fullName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    },

    passwordHash: {
        type: String,
        required: true,
    },

    avatar: {
        type: String,
        required: false,
    },
}, {
    timestamps: true
});

export default mongoDB.model('user', UserSchema);
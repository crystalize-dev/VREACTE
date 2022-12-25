import katya from "../img/avatars/katya.jpg"
import eugene from "../img/avatars/eugene.jpg"
import ismail from "../img/avatars/ismail.jpg"
import timur from "../img/avatars/timur.jpg"


export const friends = [
    {name: "Евгений Гаврилов",
     img: eugene,
     messages: [
        {who: "Евгений Гаврилов", message: "Прив"},
        {who: "я", message: "Даров"}]},
    {name: "Тимур Михутов",
     img: timur,
     messages: [
            {who: "Тимур Михутов", message: "Что на завтра надо сделать?"},
            {who: "я", message: "хз :)"}]},
    {name: "Катя Киселёва",
     img: katya,
     messages: [
            {who: "Катя Киселёва", message: "Завтра погуляем?)"},
            {who: "я", message: "Можно)"}]},
    {name: "Исмаил Казанфаров",
     img: ismail,
     messages: [
            {who: "Исмаил Казанфаров", message: "От души братик"},
            {who: "я", message: "Да пожалуйста"}]},
    {name: "Кира Кириллов",
     img: null,
     messages: [
            {who: "Кира Кириллов", message: "Когда деньги отдашь?"},
            {who: "я", message: "А ты?"}]}
]
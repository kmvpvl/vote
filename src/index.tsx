import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Агасарян	Марианна	Арташевна",
  "Акатьева	Анастасия	Максимовна",
  "Баринова	Мария	Юрьевна",
  "Белозор	Милена	Константиновна",
  "Вознюк	Вероника	Георгиевна",
  "Голованова	Алина	Ивановна",
  "Жорник	Елизавета	Сергеевна",
  "Задорожная	Виктория	Дмитриевна",
  "Каташева	Анастасия	Дмитриевна",
  "Манджиева	Улан	Нармаевна",
  "Мащенко	Мария	Владимировна",
  "Милайкина	Полина	Владимировна",
  "Морозова	Полина	Андреевна",
  "Мырадова	Бахар	",
  "Обыденнова	Екатерина	Сергеевна",
  "Оргин	Александр	Дмитриевич",
  "Пожидаева	Вероника	Юрьевна",
  "Сафиуллина	София	Маратовна",
  "Сидоркина	Арина	Наумовна",
  "Скворцова	Екатерина	Владленовна",
  "Смирнов	Никита	Борисович",
  "Страшкевич	Максим	Сергеевич",
  "Сулейман	Мухаммед	",
  "Сучона	Мст Джаннат Ара",	
  "Тимошевская	Виктория	Антоновна",
  "Титова	Виктория	Александровна",
  "Филатова	Дарья	Евгеньевна",
  "Францов	Максим	Евгеньевич",
  "Щербаков	Антон	Ростиславович",
            ]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

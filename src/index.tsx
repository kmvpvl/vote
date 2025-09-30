import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Бабей Елизавета Антоновна",
  "Булгакова Арина Александровна",
  "Валентюк Екатерина Алексеевна",
  "Васильева Любовь Павловна",
  "Гамзюк Анна Павловна",
  "Зернина Мария Геннадиевна",
  "Иванова Екатерина Аркадьевна",
  "Киселев Максим Алексеевич",
  "Климова Диана Александровна",
  "Коваль Ирина Александровна",
  "Кузина Татьяна Антоновна",
  "Кунев Иван Алексеевич",
  "Мартынова Дарья Сергеевна",
  "Мельник Мария Михайловна",
  "Митин Степан Сергеевич",
  "Нагаева Анастасия Александровна",
  "Петрова Елена Сергеевна",
  "Пилюгина Юлия Эдуардовна",
  "Профатилов Максим Александрович",
  "Ремизова Анна Александровна",
  "Румянцев Максим Юрьевич",
  "Северенкова Виктория Константиновна",
  "Семянов Александр Денисович",
  "Сивяков Роман Александрович",
  "Тимакова Екатерина Дмитриевна",
  "Чежгалова Алиса Андреевна",
  "Чутченко Семен Александрович",
  "Шимко Ирина Александровна"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

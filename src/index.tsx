import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Алексеенко Вероника Юрьевна",
  "Бобуа Нестор Геннадиевич",
  "Бондаренко Дарья Александровна",
  "Воеводин Илья Олегович",
  "Гладынюк Максим Денисович",
  "Горшков Артём Яковлевич",
  "Долинная Анна Андреевна",
  "Дороненко Софья Дмитриевна",
  "Дылдина Анна Александровна",
  "Жежель Мария Владиславовна",
  "Здашник Ксения Алексеевна",
  "Зыкова Юлия Алексеевна",
  "Крылова Виктория Алексеевна",
  "Лесникова Анна Андреевна",
  "Мингалеева Вероника Эдуардовна",
  "Плугина Екатерина Максимовна",
  "Ромадина Татьяна Васильевна",
  "Руковицан Ксения Анатольевна",
  "Рябова Дарья Олеговна",
  "Садреева Камиля Алмазовна",
  "Семенова Мария Валентиновна",
  "Сорока Диана Дмитриевна",
  "Сороконенко Тимофей Вадимович",
  "Супренкова Мария Александровна",
  "Тунгускова Дарья Олеговна",
  "Уйманова Алёна Александровна",
  "Урунов Сардорбек Нодирбекович",
  "Усаева Анита Радживовна"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Бакланов Никита Антонович",
  "Васильцова Мария Витальевна",
  "Васянина Виктория Николаевна",
  "Веселкина Полина Андреевна",
  "Грачев Ярослав Михайлович",
  "Даренская Ольга Сергеевна",
  "Евтушенко Анастасия Алексеевна",
  "Зольников Никита Вячеславович",
  "Зорина Дана Юрьевна",
  "Истомина Екатерина Максимовна",
  "Ковалёв Семён Владиславович",
  "Лубсанов Алдар Баирович",
  "Лукошкова Ксения Андреевна",
  "Манджиева Даяна Очировна",
  "Матвеева Ксения Александровна",
  "Муртазин Тимур",
  "Обухов Егор Михайлович",
  "Орлова Мария Константиновна",
  "Петинцева Полина Романовна",
  "Санченко София Андреевна",
  "Смольняковская Анна Андреевна",
  "Сырчина Светлана Дмитриевна",
  "Тихонова Ирина Владимировна",
  "Ханенкова Екатерина Сергеевна",
  "Чаговец Алёна Ивановна"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

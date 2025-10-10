import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Абрамова Кира Сергеевна",
  "Алиев Алишер",
  "Безводнов Сергей Валерьевич",
  "Бенцлер Алиса Александровна",
  "Борисова Софья Станиславовна",
  "Бузина Полина Ивановна",
  "Букина Лилия Сергеевна",
  "Витвицкий Семён Дмитриевич",
  "Гаджихмаева Мариям Демешевна",
  "Гончукова Екатерина Александровна",
  "Духнай Ирина Алексеевна",
  "Кобзева Евгения Сергеевна",
  "Орлова Мария Дмитриевна",
  "Панарина Мария Александровна",
  "Сафонова Анна Витальевна",
  "Сафонова Мария Ильинична",
  "Сергеева Анна Дмитриевна",
  "Симоненко Владислава Игоревна",
  "Соболева Екатерина Константиновна",
  "Сотников Иван Сергеевич",
  "Старшов Михаил Александрович",
  "Суховских Дмитрий Алексеевич",
  "Сюборова Дарья Константиновна",
  "Таранова Александра Камовна",
  "Унгер Алиса Андреевна",
  "Фроликов Александр Михайлович",
  "Хабалова Арина Руслановна",
  "Шувалова Софья Михайловна",
  "Якушева Мария Евгеньевна"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Александрова Дарья Александровна",
  "Галыгина Софья Валерьевна",
  "Главацкая Василиса Анатольевна",
  "Горычев Артём Евгеньевич",
  "Гусев Владислав Антонович",
  "Киреева Софья Николаевна",
  "Козлова Валерия Николаевна",
  "Колодяжная Амина Владимировна",
  "Комина Елена Владимировна",
  "Коробова Арина Александровна",
  "Краснова Анфиса Игоревна",
  "Кулик Ирина Вячеславовна",
  "Кулинич Алиса Евгеньевна",
  "Наханькова Мария Александровна",
  "Новоселов Семён Сергеевич",
  "Павлова Мария Сергеевна",
  "Погорелов Илья Константинович",
  "Полунина Софья Шерафеттиновна",
  "Рузина Дарья Вячеславовна",
  "Сабиссати Маргарида Мануэла Коррэия",
  "Спирюгов Павел Дмитриевич",
  "Терентьев Глеб Константинович",
  "Трухин Данил Сергеевич",
  "Фтодосьева Мария Михайловна",
  "Хасанов Богдан Евгеньевич",
  "Худоногова Алиса Ивановна",
  "Чернявский Никита Алексеевич",
  "Шумбасов Семён Артемович"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

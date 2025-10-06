import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Барабошкина Светлана Александровна",
  "Вечернина Вероника Дмитриевна",
  "Власенко Софья Владимировна",
  "Голованова Виктория Дмитриевна",
  "Горюнова Екатерина Максимовна",
  "Дручинина Ирина Андреевна",
  "Евгеньева Вера Николаевна",
  "Зенова Вероника Алексеевна",
  "Ивакин Михаил Сергеевич",
  "Кирпищикова Дарья Васильевна",
  "Кирюхина Алина Алексеевна",
  "Кулиева Селин Первиз кызы",
  "Лебедева Анастасия Александровна",
  "Логинов Антон Олегович",
  "Мим Санджида Ахмед",
  "Насереддин Диана Хассановна",
  "Пахомова Софья Дмитриевна",
  "Прийменко Алина Денисовна",
  "Саитгараева Виктория Альбертовна",
  "Сидлецкая Мария Антоновна",
  "Симонова Станислава Васильевна",
  "Солдатенкова Елизавета Алексеевна",
  "Стрижкова Мария Сергеевна",
  "Толпыгин Андрей Николаевич",
  "Тупицына Вероника Сергеевна"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

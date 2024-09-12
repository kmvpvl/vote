import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Алешина	Анастасия	Денисовна",
  "Анохин	Антон	Максимович",
  "Бойко	Арина	Романовна",
  "Бойкова	Анастасия	Павловна",
  "Булхуков	Сергей	Джангарович",
  "Вяткин	Артур	Станиславович",
  "Гавриков	Тимофей	Алексеевич",
  "Гладковская	Анастасия	Сергеевна",
  "Гулькина	Влада	Сергеевна",
  "Дацко	Артём	Владимирович",
  "Дембицкая	Ольга	Дмитриевна",
  "Зайдуллина	Софья	Рамилевна",
  "Иванова	Зоя	Кюндюловна",
  "Каримов	Азат	Рустемович",
  "Карлуш	Инеш Элена	",
  "Лапшина	Мария	Сергеевна",
  "Майоров	Никита	Сергеевич",
  "Минаева	София	Алексеевна",
  "Мишина	Полина	Александровна",
  "Монякова	Алиса	Александровна",
  "Павлова	Марианна	Олеговна",
  "Панов	Станислав	Семенович",
  "Рябцева	Марфа	Юрьевна",
  "Семыкина	Арина	Игоревна",
  "Стрельников	Константин	Алексеевич",
  "Фаттахова	Рината	Робертовна",
  "Хазиев	Булат	Ренатович",
  "Цух	Валерия	Павловна",
  "Яничева	Виктория	Константиновна",
  "Ярошенко	Анна	Андреевна",
  ]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

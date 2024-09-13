import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Абрамова	Ульяна	Алексеевна",
  "Афанасьева	Алина	Александровна",
  "Галицкая	Алина	Эмилевна",
  "Гладкова	Арина	Андреевна",
  "Долгова	Дарья	Сергеевна",
  "Ермакова	Дарья	Денисовна",
  "Калинина	Полина	Сергеевна",
  "Киселева	Софья	Евгеньевна",
  "Лунюшкина	Анастасия	Александровна",
  "Микушева	Дарья	Владимировна",
  "Овчаренко	Анна	Юрьевна",
  "Сагдиев	Даниэль	Родионович",
  "Спасюк	Михаил	Владиславович",
  "Токарева	Екатерина	Ильинична",
  "Хачмахова	Саният	Рамазановна",
  "Хлыстова	Анастасия	Андреевна",
  "Хохлова	Милена	Алексеевна",
  "Чайкова	Варвара	Сергеевна",
  "Шабрашин	Петр	Алексеевич",
          ]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Алтышев	Максим	Андреевич",
  "Афонская	Анна	Александровна",
  "Бобрикова	Таисия	Васильевна",
  "Борисова	Екатерина	Александровна",
  "Буга	Анастасия	Юрьевна",
  "Булат	Алина",	
  "Васильев	Александр	Александрович",
  "Вишнякова	Вероника	Игоревна",
  "Власенко	Кирилл	Дмитриевич",
  "Волчанинова	Дарья	Святославовна",
  "Данильчева	Полина	Юрьевна",
  "Демьяхина	Мария	Владимировна",
  "Ибрагимова	Арина	Азатовна",
  "Майорова	Арина	Сергеевна",
  "Марченко	Марина	Григорьевна",
  "Норок	Ульяна	Владимировна",
  "Палладина	Кира	Андреевна",
  "Пичугина	София	Юрьевна",
  "Попова	Анастасия	Дмитриевна",
  "Притворова	Мария	Андреевна",
  "Смирнова	Саломея	Олеговна",
  "Сорокина	Мария	Дмитриевна",
  "Станиславова	Полина	Валерьевна",
  "Суриков	Дмитрий	Александрович",
  "Тюрина	Софья	Фаридовна",
  "Чаркина	Елизавета	Сергеевна",
  "Шестаков	Артемий	Андреевич",
  "Шмаева	Мария	Игоревна",
  "Шокшуева	Ульяна	Александровна"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

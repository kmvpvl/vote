import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Абрамова	Евгения	Ильинична",
  "Андреева	Мария	Витальевна",
  "Аношкина	Яна	Артёмовна",
  "Антипенко	Иван	Владимирович",
  "Ануфриева	Майя	Андреевна",
  "Балуева	Валентина	Романовна",
  "Гусарова	Ангелина	Юрьевна",
  "Диксит	Прия	Навиновна",
  "Донская	Анастасия	Дмитриевна",
  "Ермакова	Полина	Евгеньевна",
  "Игонина	Мария	Владиславовна",
  "Кайряк	Алина	Олеговна",
  "Келимуллина	Арина	Ильдаровна",
  "Кобзева	Юлия	Андреевна",
  "Козлова	Александра	Артемовна",
  "Кубатов	Кубат	Умарович",
  "Купцов	Никита	Вячеславович",
  "Малахова	Жанна	Витальевна",
  "Ноздрина	Полина	Николаевна",
  "Патанин	Александр	Сергеевич",
  "Пискунова	Алиса	Вадимовна",
  "Семенова	Дарья	Викторовна",
  "Степанова	Варвара	Сергеевна",
  "Сухаревич	Валерия	Олеговна",
  "Телегин	Артём	Дмитриевич",
  "Телегина	Мария	Александровна",
  "Терехова	Дарья	Владимировна",
  "Товмасян	Эдгар	Артурович",
  "Фабричная	Елена	Сергеевна",
  "Фабричная	Ирина	Сергеевна",
      ]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

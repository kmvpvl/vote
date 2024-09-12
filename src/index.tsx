import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Агарков	Андрей	Александрович",
  "Агафонова	Анастасия	Александровна",
  "Бахина	Мария	Владимировна",
  "Быкова	Александра	Евгеньевна",
  "Васильева	Валерия	Сергеевна",
  "Гаврилова	Дарья	Валерьевна",
  "Гиско	Георгий	Андреевич",
  "Гурари	Ася	Андреевна",
  "Дашичев	Алексей	Юрьевич",
  "Дилшоди	Боротали	",
  "Елисеев	Роман	Олегович",
  "Ефремова	Полина	Антоновна",
  "Казакова	Анастасия	Алексеевна",
  "Качурин	Родион	Алексеевич",
  "Кириллова	Олеся	Андреевна",
  "Костенко	Павел	Андреевич",
  "Костюшин	Андрей	Алексеевич",
  "Кукушина	Арина	Денисовна",
  "Логинов	Максим	Романович",
  "Митиенко	Алина	Алексеевна",
  "Моисеенкова	Дарина	Дмитриевна",
  "Очирова	Аяна	Чойбоновна",
  "Пухова	Варвара	Владимировна",
  "Рогаткина	Мария	Олеговна",
  "Сыбий	Анна	",
  "Устинова	Александра	Евгеньевна",
  "Фомин	Егор	Андреевич",
  "Черкасов	Александр	Андреевич",
  "Шабалина	Ирина	Юрьевна",
  "Шахобуддинова	Сохиба	Обидовна",
    ]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Андреева Анастасия Александровна",
  "Беляшина Ульяна Максимовна",
  "Бобу Лидия Витальевна",
  "Брензей Алексей Алексеевич",
  "Виноградова Злата Зиновьевна",
  "Дагаева Виктория Дмитриевна",
  "Емельянов Марк Евгеньевич",
  "Ильина Анастасия Александровна",
  "Кадушкина Ульяна Романовна",
  "Карелина Виктория Алексеевна",
  "Масленникова Валентина Олеговна",
  "Мередов Атаджан",
  "Миргородская Ольга Владимировна",
  "Николаева Полина Сергеевна",
  "Носков Михаил Николаевич",
  "Ожегова Милана Вячеславовна",
  "Орловцев Владимир Александрович",
  "Поздняков Никита Игоревич",
  "Пудовкина Елизавета Петровна",
  "Раднаев Аюша Игоревич",
  "Рогожина Дарья Павловна",
  "Суйунбек Кызы Арууке",
  "Тоторкулова Амина Муратовна",
  "Филиппова Алина Александровна",
  "Шибицкий Егор Сергеевич",
  "Юматова Екатерина Максимовна",
  "Янаева Алина Венеровна",
  "Янкина Дарья Александровна"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

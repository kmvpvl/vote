import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Абрашина Ксения Александровна",
  "Анфалова Ксения Сергеевна",
  "Бочерикова Анастасия Евгеньевна",
  "Букина Елизавета Александровна",
  "Высотская Вероника Игоревна",
  "Горелых Екатерина Олеговна",
  "Гусева Мария Павловна",
  "Дубинко Арсений Андреевич",
  "Игнатова Ксения Николаевна",
  "Кондакова Милена Александровна",
  "Копякова Елизавета Александровна",
  "Мартинелли Андрей Дмитриевич",
  "Масленикова Мария Сергеевна",
  "Москвина Александра Сергеевна",
  "Муратдурдыев Мухамет",
  "Петухова Дарина Александровна",
  "Пилинцова Полина Кирилловна",
  "Розенбаум Арина Геннадьевна",
  "Романец Артём Андреевич",
  "Самсонова Диана Павловна",
  "Селезнева Карина Олеговна",
  "Силюкова Екатерина Олеговна",
  "Смирнова Алина Максимовна",
  "Суровикина Анастасия Дмитриевна",
  "Тимофеева Инесса Ивановна",
  "Унежев Руслан Андрозорович",
  "Францкевич Эвелина Андреевна",
  "Шмелев Вадим Олегович",
  "Юртаева Дарья Александровна",
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

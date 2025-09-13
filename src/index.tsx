import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Барышников Эрик Андреевич",
  "Бахирев Валерий Сергеевич",
  "Вольберг Георгий Олегович",
  "Гаврилов Арсений Ромизович",
  "Громыко Анастасия Алексеевна",
  "Жуков Георгий Иванович",
  "Инфантэ Тимофей Северинович",
  "Калугин Иван Николаевич",
  "Киряшева Алина Муратовна",
  "Киселева Елизавета Вячеславовна",
  "Коломиец Мария Денисовна",
  "Кондратенко Тимофей Павлович",
  "Коптелова Елизавета Антоновна",
  "Леденев Егор Олегович",
  "Лошкарева Дарья Александровна",
  "Михалев Александр Борисович",
  "Мякишева Ева Романовна",
  "Назарова Полина Олеговна",
  "Рафалович Евгения Ильинична",
  "Самохин Данил Юрьевич",
  "Саушкина Елизавета Сергеевна",
  "Сидоренко Александр Владимирович",
  "Силаев Владислав Романович",
  "Столяр Анастасия Андреевна",
  "Трубников Сергей Максимович",
  "Федорова Анна Андреевна",
  "Цуканов Дмитрий Николаевич",
  "Чернышова Алиса Дмитриевна",
  "Шишкин Ефим Александрович"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

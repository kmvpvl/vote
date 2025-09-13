import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Коптелова Елизавета Антоновна",
  "Саушкина Елизавета Сергеевна",
  "Коломиец Мария Денисовна",
  "Федорова Анна Андреевна",
  "Лошкарева Дарья Александровна",
  "Столяр Анастасия Андреевна",
  "Сидоренко Александр Владимирович",
  "Киселева Елизавета Вячеславовна",
  "Назарова Полина Олеговна",
  "Рафалович Евгения Ильинична",
  "Чернышова Алиса Дмитриевна",
  "Киряшева Алина Муратовна",
  "Инфантэ Тимофей Северинович",
  "Цуканов Дмитрий Николаевич",
  "Михалев Александр Борисович",
  "Вольберг Георгий Олегович",
  "Трубников Сергей Максимович",
  "Гаврилов Арсений Ромизович",
  "Мякишева Ева Романовна",
  "Самохин Данил Юрьевич",
  "Бахирев Валерий Сергеевич",
  "Леденев Егор Олегович",
  "Силаев Владислав Романович",
  "Калугин Иван Николаевич",
  "Кондратенко Тимофей Павлович",
  "Барышников Эрик Андреевич",
  "Жуков Георгий Иванович",
  "Громыко Анастасия Алексеевна",
  "Шишкин Ефим Александрович"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Бердыкулов Демир Илхамович",
  "Бобылева Виктория Дмитриевна",
  "Гриднева Екатерина Дмитриевна",
  "Дробкова Ольга Юрьевна",
  "Евдокименко Владислав Сергеевич",
  "Заболотская Евгения Ивановна",
  "Иванова Анастасия Анатольевна",
  "Ивочкина Дарья Андреевна",
  "Йылмаз Эртем Эрканович",
  "Коптева Надежда Витальевна",
  "Макарчук Анастасия Михайловна",  
  "Максимова Анастасия Денисовна",
  "Маслов Владимир Андреевич",
  "Османов Даниял Гаджиевич",
  "Паулу Менезес Душ Сантуш",
  "Полуэктова Анастасия Андреевна",
  "Рукавишникова Юлия Андреевна",
  "Северов Никита Владимирович",
  "Серчук Макар Александрович",
  "Сивоконь Серафима Сергеевна",
  "Титов Александр Павлович",
  "Трубин Андрей Валерьевич",
  "Цетухина Софья Михайловна",
  "Цюпина Ульяна Александровна",
  "Чичин Максим Александрович",
  "Шмарова Полина Владимировна"
]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

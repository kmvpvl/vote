import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Абдуллаев Шахрам",
"Абдусаидова Маржона",
"Аширбоев Исроил",
"Бахтиёров Бехруз",
"Бусинов Алимардон",
"Журакулова Гулноза",
"Заирова Рушана",
"Ибрагимов Акобирхон",
"Ишназаров Жасур",
"Косимбоев Миркамол",
"Купаев Асан",
"Кушарбаева Джамиля",
"Лежнина Алла",
"Масальцева Екатерина",
"Муродов Сардор",
"Ниязов Шохжахон",
"Одилжонова Севинч",
"Руклинская Татьяна",
"Сапаралиева Мухлиса",
"Тохирхонов Лазизхон",
"Турдалиев Бехруз",
"Убайдуллаев Юсуфжон",
"Фарходова Гулсанам",
"Холматов Рамзидин",
"Хуршедова Махфират",
"Цой Данил",
"Жуманова Фарангиз",
              ]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

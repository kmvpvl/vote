import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import WebApp from "./WebApp";

const list: string[] = [
  "Абрашин	Георгий	Михайлович",
  "Бегунова	Юлия	Дмитриевна",
  "Богомолова	Александра	Алексеевна",
  "Гладких	Анастасия	Владимировна",
  "Ильина	Арина	Максимовна",
  "Кау	Рикарду Симау	",
  "Кондусова	Оксана	Валерьевна",
  "Кузина	Полина	Сергеевна",
  "Куприянова	Мария	Ильинична",
  "Лаврухина	Виктория	Леонидовна",
  "Магакян	Смбат	Геворкович",
  "Мартиросова	Мария	Артемовна",
  "Мухтарова	Назани	Бахрам кызы",
  "Мушинский	Владислав	Константинович",
  "Мырадов	Бегенч	",
  "Петрова	Милана	Аркадьевна",
  "Полторацкая	Мария	Александровна",
  "Пучкова	Виктория	Ивановна",
  "Романов	Даниил	Иванович",
  "Сальникова	Дарья	Андреевна",
  "Самсонова	Алеся	Алексеевна",
  "Свобода	Артём	Алексеевич",
  "Сивяков	Александр	Александрович",
  "Сидорова	Анна	Владимировна",
  "Стрединина	Валентина	Борисовна",
  "Сузакова	Полина	Дмитриевна",
  "Фомина	Анастасия	Антоновна",
  "Челак	Дарья	Семеновна",
  "Чернов	Иван	Дмитриевич",
  "Шерементова	Александра	Олеговна",
              ]

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<React.StrictMode><WebApp list={list}/></React.StrictMode>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

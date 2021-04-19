import React, { useState, useEffect, useRef, useCallback } from "react";
import { getData } from "../../services/requests";
import "./styles.scss";
import AppointmentCard from "../Appointment/AppointmentCard";
import Loader from "../UI/Loader";

const monthes = [
  "Январь",
  "Февраль",
  "Март",
  "Апрель",
  "Май",
  "Июнь",
  "Июль",
  "Август",
  "Сентябрь",
  "Октябрь",
  "Ноябрь",
  "Декабрь",
];

const MyAppointments = ({ setPage }) => {
  const [cards, updateCards] = useState(false);
  const [filteredCards, setFilteredCards] = useState([]);
  const [error, setError] = useState(false);
  const days = useRef([]);

  useEffect(() => {
    getData("http://localhost:3030/records")
      .then((data) => {
        updateCards(data);
        setFilteredCards(data);
      })
      .catch(() => setError(true));
  }, []);

  // Calendar
  const now = new Date();
  
  const [month, setMonth] = useState(now.getMonth());
  const [year, setYear] = useState(now.getFullYear());
  
  const daysInMonth = 32 - new Date(year, month, 32).getDate();

  const changeMonthHandler = useCallback((num) => {
    setMonth(month + num);

    if (month + num === 12) {
      setMonth(0);
      setYear(year + 1);
    }
    if (month + num === -1) {
      setMonth(11);
      setYear(year - 1);
    }
  }, [month, year])
  
  const selectDayHandler = useCallback((event) => {
    [...days.current.children].forEach((item) => {
      if (item.classList.contains("my-appointments__active-day")) {
        item.classList.remove("my-appointments__active-day");
      }
    });

    event.target.classList.add("my-appointments__active-day");
    
    setFilteredCards(cards.filter(
      (item) => item.date === `${event.target.textContent}.${month + 1 < 9 ? `0${month + 1}` : month + 1}.${year % 100}`));
  }, [cards, month, year]);

  const filterHandler = useCallback(() => {
    setFilteredCards(cards);
    if (document.querySelector(".my-appointments__active-day")) {
      document
        .querySelector(".my-appointments__active-day")
        .classList.remove("my-appointments__active-day");
    }
  }, [cards])

  
  const createCalendar = useCallback((num) => {
    const array = [];

    for (let i = 0; i < num; i++) {
      array.push(i);
    }

    if (document.querySelector(".my-appointments__days") && num === 28) {
      document.querySelector(".my-appointments__days").style.paddingBottom = "163px";
    }

    return array.map((item) => (
      <div
        className={`my-appointments__day ${
          now > new Date(year, month, item + 1)
            ? "my-appointments__passed-day"
            : ""
        }`}
        key={item}
        onClick={selectDayHandler}
      >
        {item + 1}
      </div>
    ));

  }, [month, now, selectDayHandler, year])

  const setPageHandler = () => {
    setPage(0);
  }

  return (
    <div className="my-appointments">
      <div className="my-appointments__title" onClick={setPageHandler}>
        <img src="/img/back.svg" alt="назад"></img>
        <h3>Мои записи</h3>
      </div>
      <div className="my-appointments__content-wrapper">
        <ul className="my-appointments__card-wrapper">
          {cards.length !== filteredCards.length && (
            <div onClick={filterHandler} className="my-appointments__back">
              Показать все записи
            </div>
          )}
          {error && <span>Что-то пошло не так :(</span>}
          {!cards && <Loader />}
          {cards.length === 0 && <span>Здесь пока нет записей</span>}
          {cards.length > 0 && <AppointmentCard cards={filteredCards} />}
        </ul>
        <div className="my-appointments__calendar">
          <div className="my-appointments__month-wrapper">
            <img
              src="/img/arrow.png"
              className="my-appointments__prev-arrow"
              onClick={() => changeMonthHandler(-1)}
              alt="prev-arrow"
            ></img>
            <div className="my-appointments__month">
              {monthes[month]}&nbsp;{year}
            </div>
            <img
              src="/img/arrow.png"
              className="my-appointments__next-arrow"
              onClick={() => changeMonthHandler(1)}
              alt="prev-arrow"
            ></img>
          </div>
          <div className="my-appointments__day-of-week">
            <div>Пн</div>
            <div>Вт</div>
            <div>Ср</div>
            <div>Чт</div>
            <div>Пт</div>
            <div>Сб</div>
            <div>Вс</div>
          </div>
          <div className="my-appointments__days" ref={days}>
            {createCalendar(daysInMonth)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;

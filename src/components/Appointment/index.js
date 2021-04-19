import React, { useState, useEffect, useCallback } from "react";

import AppointmentCard from "./AppointmentCard";
import { getData } from "../../services/requests";
import Loader from "../UI/Loader";

import "./styles.scss";

const Appointment = ({ setPage }) => {
  const [cards, setCards] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    getData("http://localhost:3030/records")
      .then((data) => setCards(data))
      .catch((err) => setErrorMessage(err));
  }, []);

  const clickHandler = useCallback((event) => {
    event.preventDefault();
    setPage(1);
  }, [setPage])

  return (
    <div className="appointment">
      <h3 className="appointment__title">Записи на прием</h3>
      <div className="appointment__content">
        <ul className="appointment__list">
          {errorMessage && <span>{errorMessage}</span>}
          {!cards && <Loader />}
          {cards.length === 0 && <span>Здесь пока нет записей</span>}
          {!errorMessage && cards.length > 0 && <AppointmentCard cards={cards.slice(0, 2)} />}
        </ul>

        <div className="appointment__more">
          <h3>Еще 3 записи</h3>
          <a href="/" onClick={clickHandler}>
            Подробнее
          </a>
        </div>
      </div>
    </div>
  );
};

export default Appointment;

import React from "react";
import "./styles.scss";

const AppointmentCard = ({ cards }) => {
  return cards.map((item) => {
    return (
      <li
        key={`${item.day}_${item.date}_${item.time}`}
        className="appointment-card"
      >
        <div className="appointment-card__date">
          {item.day} {item.date} | {item.time}
        </div>
        <div className="appointment-card__adress">{item.clinic}</div>
        <div className="appointment-card__doctor">
          <img
            src={item.photoSrc}
            alt="doctor"
            className="appointment-card__doctor-img"
          ></img>
          <div className="appointment-card__about">
            <div className="appointment-card__name">{item.doctor}</div>
            <h5 className="appointment-card__specialization">
              {item.specialization}
            </h5>
          </div>
        </div>
        <button className="btn-primary">Отменить</button>
      </li>
    );
  });
};

export default AppointmentCard;

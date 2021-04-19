import React from "react";
import "./styles.scss";
import ECardItem from "./ECardItem";

const ECard = () => (
  <div className="e-card">
    <h3>Электронная карта</h3>
    <ul className="e-card__wrapper">
      <ECardItem />
    </ul>
  </div>
);

export default ECard;

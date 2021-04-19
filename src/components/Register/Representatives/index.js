import React from "react";
import "./styles.scss";
import Input from "../../UI/Input";

const Representatives = ({ onStepChange, onInputChange }) => (
  <div className="register-step3">
    <p>
      Укажите данные вашего представителя (например, член семьи) или иного
      лица для экстренного информирования
    </p>
    <form onSubmit={onStepChange}>
      <Input
        name={"representative-surname"}
        placeholder={"Телефон"}
        type={"text"}
        inputHandler={onInputChange}
      />
      <Input
        name={"representative-name"}
        placeholder={"Имя"}
        type={"text"}
        inputHandler={onInputChange}
      />
      <Input
        name={"representative-patronymic"}
        placeholder={"Отчество"}
        type={"text"}
        inputHandler={onInputChange}
      />
      <Input
        name={"representative-phone-number"}
        placeholder={"Телефон"}
        type={"text"}
        inputHandler={onInputChange}
      />
      <button className="btn-primary submit-button">
        Зарегистрироваться
      </button>
    </form>
  </div>
);

export default Representatives;

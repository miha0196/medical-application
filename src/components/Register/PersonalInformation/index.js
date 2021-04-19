import React, { useRef } from "react";
import "./styles.scss";
import Input from "../../UI/Input";

const PersonalInformation = ({ onInputChange, onStepChange, selectGender }) => {
  const gender = useRef(null);

  return (
    <div className="personal-information">
      <form onSubmit={onStepChange}>
        <Input
          name={"surname"}
          placeholder={"Фамилиия"}
          type={"text"}
          inputHandler={onInputChange}
          required
        />
        <Input
          name={"name"}
          placeholder={"Имя"}
          type={"text"}
          inputHandler={onInputChange}
          required
        />
        <Input
          name={"patronymic"}
          placeholder={"Отчество"}
          type={"text"}
          inputHandler={onInputChange}
          required
        />
        <div className="personal-information__gender-n-date" ref={gender}>
          <p>Пол:</p>
          <div
            className="personal-information__gender"
            onClick={(e) => selectGender(e, gender.current)}
            data-gender="male"
          >
            М
          </div>
          <div
            className="personal-information__gender"
            onClick={(e) => selectGender(e, gender.current)}
            data-gender="female"
          >
            Ж
          </div>
          <input
            type="date"
            name="birth-date"
            className="personal-information__born"
            onChange={onInputChange}
            required
          ></input>
        </div>
        <Input
          name={"registration-adress"}
          placeholder={"Адрес регистрации"}
          type={"text"}
          inputHandler={onInputChange}
          required
        />
        <Input
          name={"residence-address"}
          placeholder={"Адрес места жительства"}
          type={"text"}
          inputHandler={onInputChange}
          />
        <button className="btn-primary submit-button">Далее</button>
      </form>
    </div>
  );
};

export default PersonalInformation;

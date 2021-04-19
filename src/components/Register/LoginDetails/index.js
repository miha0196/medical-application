import React from "react";

import Input from "../../UI/Input";

import "./styles.scss";

const LoginDetails = ({ onInputChange, onStepChange, validationErrors }) => (
  <div className="login-details">
    <form onSubmit={onStepChange}>
      <Input
        name={"email"}
        placeholder={"Почта"}
        type={"email"}
        inputHandler={onInputChange}
        required={true}
        errorMessage={validationErrors.emailError}
      />
      <Input
        name={"phone-number"}
        placeholder={"Телефон"}
        type={"text"}
        inputHandler={onInputChange}
        required={true}
        errorMessage={validationErrors.phoneNumberError}
      />
      <Input
        name={"password"}
        placeholder={"Пароль"}
        type={"password"}
        inputHandler={onInputChange}
        required={true}
        errorMessage={validationErrors.passError}
      />
      <Input
        name={"confirm"}
        placeholder={"Повторите пароль"}
        type={"password"}
        inputHandler={onInputChange}
        required={true}
        errorMessage={validationErrors.confirmError}
      />
      <div className="login-details__permission">
        <input
          required
          type="checkbox"
          name="permission"
          className="login-details__custom-checkbox"
          onChange={onInputChange}
        ></input>
        <label htmlFor="permisson"></label>
        <h5>Я согласен на:</h5>
      </div>
      <p>
        <a href="/" onClick={(event) => event.preventDefault()}>
          - Обработку персональных данных (ФЗ 152)
        </a>
      </p>
      <p>- Передачу персональных данных третьим лицам</p>
      <p>- Обращение для информирования и напоминания</p>
      <button type="submit" className="btn-primary submit-button">
        Далее
      </button>
    </form>
  </div>
);

export default LoginDetails;

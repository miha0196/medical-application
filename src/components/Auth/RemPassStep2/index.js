import React, { useCallback } from "react";
import { useHistory } from 'react-router-dom';

import Input from "../../UI/Input";

import "./styles.scss";

const RemPassStep2 = () => {
  const history = useHistory();

  const submitHandler = useCallback((event) => {
    event.preventDefault();
    history.push("/join");
  }, [history])

  return (
    <div className="rem-pass">
      <h2>Ввостановление пароля</h2>
      <p>Придумайте новый пароль</p>

      <form onSubmit={submitHandler}>
        <Input
          name={"password"}
          placeholder={"Введите новый пароль"}
          type={"password"}
        />
        <Input
          name={"password"}
          placeholder={"Повторите пароль"}
          type={"password"}
        />
        <button className="btn-primary">Далее</button>
      </form>
    </div>
  );
};

export default RemPassStep2;

import React, { useState, useCallback } from "react";
import { Link, useHistory } from "react-router-dom";

import Input from "../UI/Input";

import "./styles.scss";

const Auth = ({ onSetIsLogged }) => {
  const [login, setLogin] = useState();
  const [pass, setPass] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const history = useHistory();

  const loginHandler = useCallback(async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3030/users");
      const users = await response.json();
      const user = users.find(user => user.email === login || user["phone-number"] === login)

      if (!user) {
        return setErrorMessage("Пользователя с таким email или номером телефона не существует");
      }

      if (user.password !== pass) {
        return setErrorMessage("Пароль пользователя не верен");
      }

      onSetIsLogged(true);
      history.push("/");
    } catch (err) {
      setErrorMessage(err);
    }
  }, [history, login, onSetIsLogged, pass]);

  const loginChangeHandler = useCallback((event) => {
    setLogin(event.target.value);
  }, [])

  const passwordChangeHandler = useCallback((event) => {
    setPass(event.target.value);
  }, [])

  return (
    <div className="auth">
      <h2 className="auth__title">Вход</h2>
      <h4 className="auth__subtitle">
        У вас нет аккаунта?&nbsp;
        <Link to="/join/register">Зарегистрироваться</Link>
      </h4>
      <form onSubmit={loginHandler}>
        <Input
          name={"login"}
          placeholder={"Почта или телефон"}
          type={"text"}
          inputHandler={loginChangeHandler}
        />
        <Input
          name={"password"}
          placeholder={"Пароль"}
          type={"password"}
          inputHandler={passwordChangeHandler}
        />
        <div className="auth__remember-pass">
          Забыли пароль? <Link to="/join/rem-pass-step1">Восстановить</Link>
        </div>
        {errorMessage && <span className="auth__invalid">{errorMessage}</span>}
        <button className="btn-primary">Войти</button>
      </form>
    </div>
  );
};

export default Auth;

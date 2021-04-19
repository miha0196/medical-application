import React from "react";
import { Switch, Route, useLocation } from "react-router-dom";

import Auth from "../../Auth";
import RemPassStep1 from "../../Auth/RemPassStep1";
import RemPassStep2 from "../../Auth/RemPassStep2";
import Register from "../../Register";

import "./styles.scss";

const AuthPage = ({ onSetIsLogged }) => {
  const location = useLocation();

  return (
    <div className="auth-page">
      <div className="auth-page__wrapper">
        <div className="auth-page__header">
          <h3>Портал пациента</h3>
          <div>
            <img src="/img/eye.svg" alt="eye"></img>
            Версия для слабовидящих
          </div>
        </div>

        <Switch>
          <Route path="/join" exact>
            <Auth onSetIsLogged={onSetIsLogged} />;
          </Route>
          <Route path="/join/rem-pass-step1">
            <RemPassStep1 />
          </Route>
          <Route path="/join/rem-pass-step2">
            <RemPassStep2 />
          </Route>
          <Route path="/join/register" component={Register} />
        </Switch>

        <img
          src="/img/logo-img-alt.png"
          alt="logo"
          className="auth-page__logo"
        ></img>
      </div>
      <div className="auth-page__add">
        {location.pathname.indexOf("register") === -1 ? (
          <>
            <h2 className="auth-page__remember-pass-title">
              Добро пожаловать!
            </h2>
            <img src="/img/Group.png" alt="medical"></img>
          </>
        ) : (
          <>
            <h2 className="auth-page__register-title">
              Начните следить за своим здоровьем вместе с нами!
            </h2>
            <img src="/img/bg-1.png" alt="medical"></img>
          </>
        )}

        <h3>Вместе с нами медицина стала проще!</h3>
      </div>
    </div>
  );
};

export default AuthPage;

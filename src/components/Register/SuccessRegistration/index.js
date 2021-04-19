import React, { useEffect } from "react";
import "./styles.scss";
import { useHistory } from "react-router-dom";

const SuccessRegistration = () => {
  const history = useHistory();

  useEffect(() => {
    let timerRedirect = setTimeout(() => {
      history.push("/join");
    }, 2500);

    return () => clearTimeout(timerRedirect);
  }, [history]);

  return (
    <div className="success-registration">
      <div className="success-registration__header">
        <h3>Портал пациента</h3>
      </div>
      <h2>Вы успешно зарегистрировались! </h2>
      <h3 className="success-registration__subtitle">Давайте приступим</h3>
      <img
        src="/img/Frame.png"
        alt="success-registration"
        className="success-registration__img"
      ></img>
      <img
        src="/img/logo-img.png"
        alt="logo"
        className="auth-page__logo"
      ></img>
    </div>
  );
};

export default SuccessRegistration;

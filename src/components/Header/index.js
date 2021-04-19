import React, { useCallback, useRef } from "react";
import "./styles.scss";

const Header = ({ onSetIsLogged }) => {
  const dropdown = useRef(null);

  const toggleDropdown = useCallback(() => {
    dropdown.current.classList.toggle("header__dropdown_active");
  }, []);

  const exitHandler = useCallback(() => {
    onSetIsLogged(false);
  }, [onSetIsLogged]);

  return (
    <div className="header">
      <h2>Мой профиль</h2>
      <div className="menu">
        <ul>
          <li>
            <img src="/img/search.svg" alt=""></img>
          </li>
          <li>
            <img src="/img/bell.svg" alt=""></img>
          </li>
          <li>
            <img src="/img/eye-alt.svg" alt=""></img>
          </li>
        </ul>
        <div className="header__profile-img">
          <img src="/img/pexels-photo-774909.jpg" alt="profile-img"></img>
        </div>
        <div className="header__back">
          <img
            src="/img/back-arrow.svg"
            alt="back-img"
            onClick={toggleDropdown}
          ></img>
          <div
            className="header__dropdown"
            ref={dropdown}
            onClick={exitHandler}
          >
            Выйти
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

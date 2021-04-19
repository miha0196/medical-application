import React, { useCallback, useRef } from "react";
import { useHistory } from 'react-router-dom';

import "./styles.scss";

const RemPassStep1 = () => {
  const inputs = useRef(null);
  const history = useHistory();

  const submitHandler = useCallback(() => {
    history.push("/join/rem-pass-step2");
  }, [history])

  const inputHandler = useCallback((event) => {

    if (
      event.target.value.length === 1 &&
      [...inputs.current.children][
        +event.target.getAttribute(["data-num"]) + +1
      ]
    ) {
      [...inputs.current.children][
        +event.target.getAttribute(["data-num"]) + +1
      ].focus();
    }

    if (
      [...inputs.current.children].filter((input) => input.value === "")
        .length === 0
    ) {
      [...inputs.current.children].forEach((item) => {
        item.style.border = "1px solid red";
      });
    }
  }, [])

  const createInputs = useCallback(() => {
    let arr = [];
    for (let i = 0; i < 6; i++) {
      arr.push(
        <input
          maxLength="1"
          key={i}
          data-num={i}
          onChange={inputHandler}
        ></input>
      );
    }
    return arr;
  }, [inputHandler])

  return (
    <div className="rem-pass">
      <h2>Ввостановление пароля</h2>
      <p>На ваш номер выслан код восстановления</p>

      <form onSubmit={submitHandler}>
        <div className="inputs" ref={inputs}>
          {createInputs()}
        </div>
        <h5>Повторить отправку через 00:15</h5>
        <button className="btn-primary">Далее</button>
      </form>
      <a href="/">Другой способ восстановления</a>
    </div>
  );
};

export default RemPassStep1;

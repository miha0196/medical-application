import React, { useRef, useCallback } from "react";

import "./styles.scss";

const Input = ({ name, placeholder, type, inputHandler, required, errorMessage }) => {
  const label = useRef(null);

  const focusHandler = useCallback((event) => {
    label.current.style.display = "block";
    event.target.style.border = "1px solid #003B72";
  }, [])

  const blurHandler = useCallback((event) => {
    label.current.style.display = "none";
    event.target.style.border = "1px solid #000";
  }, [])

  return (
    <>
      {errorMessage && <span className="Input__error-message">{errorMessage}</span>}
      <label className="input-label" htmlFor={name} ref={label}>
        {placeholder}
      </label>
      <input
        name={name}
        placeholder={placeholder}
        onChange={inputHandler}
        type={type}
        onFocus={focusHandler}
        onBlur={blurHandler}
        required={required}
      ></input>
    </>
  );
};

export default Input;

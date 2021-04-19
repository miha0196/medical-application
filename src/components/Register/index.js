import React, { useState, useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

import LoginDetails from "./LoginDetails";
import PersonalInformation from "./PersonalInformation";
import Representatives from "./Representatives";
import SuccessRegistration from "./SuccessRegistration";
import { createUser } from "../../services/requests";

import "./styles.scss";

const isEmailExist = async (url, email) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, received ${response.status}`);
  }

  const result = await response.json();

  return result.some((user) => user.email === email);
};

const Register = () => {
  const [stepRegister, setStepRegister] = useState(0);
  const [formData, setFormData] = useState({});
  const [validationErrors, setValidationErrors] = useState({});
  const loading = useRef(null);

  const inputChangeHandler = useCallback((event) => {
    const name = event.target.name;
    let value = event.target.value;

    if (name === "permission") {
      return;
    }

    formData[name] = value;
  }, [formData]);

  const stepChangeHandler = useCallback(async (event) => {
    event.preventDefault();
      
    // Валидация первой страницы
    if (stepRegister === 0) {
      const errors = {};

      try {
        if (await isEmailExist("http://localhost:3030/users", formData.email)) {
          errors.emailError = "Пользователь с таким email уже зарегистрирован";
        }
      } catch (err) {
        throw err;
      }

      if (!formData["phone-number"].match(/^\d[\d() -]{4,14}\d$/)) {
        errors.phoneNumberError = "Введите корректный номер телефона";
      }

      if (!formData.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
        errors.emailError = "Введите корректный E-mail";
      } 

      if (formData.password.length < 6) {
        errors.passError = "Пароль должен содержать не менее 6 символов";
      }

      if (formData.password !== formData.confirm) {
        errors.confirmError = "Пароли должны совпадать"
      }

      setValidationErrors(errors);

      // Проверка на наличие ошибок
      for (let error in errors) {
        return
      }
    }

    setStepRegister((prevStep) => prevStep + 1);

    if (stepRegister === 2) {
      createUser("http://localhost:3030/users", formData);
    }
  }, [formData, stepRegister]);

  const selectGender = useCallback((event, genderParentNode) => {

    if (event.target) {
      
      if (genderParentNode && genderParentNode.children) {
        Array.prototype.forEach.call(genderParentNode.children, function (node) {
          if (node.classList && node.classList.contains("personal-information__gender_active")) {
            node.classList.remove("personal-information__gender_active");
          }
        });
      }
  
      if (event.target.classList) {
        event.target.classList.add("personal-information__gender_active");
      }
  
      const gender = event.target.dataset.gender;   
      setFormData((prevData) => ({ ...prevData, gender })); 
    }
  }, []);
  
  useEffect(() => {
    const img = document.createElement("img");
    img.setAttribute("src", "/img/completed.svg");
    
    if (loading.current) {
      switch (stepRegister) {
        case 1:
          [...loading.current.children][0].children[0].innerText = "";
          [...loading.current.children][0].children[0].append(img);
          [...loading.current.children][1].classList.add("active");
          [...loading.current.children][2].classList.add("active");
          break;
        case 2:
          [...loading.current.children][2].children[0].innerText = "";
          [...loading.current.children][2].children[0].append(img);
          [...loading.current.children][3].classList.add("active");
          [...loading.current.children][4].classList.add("active");
          break;
        default:
          break;
      }
    }
  }, [stepRegister])

  return (
    <div className="register">
      <h2>Регистрация</h2>

      <h4>
        У вас уже есть аккаунт?&nbsp;<Link to="/join">Войти</Link>
      </h4>
      
      <div className="register__loading" ref={loading}>
        <div className="register__step active">
          <div className="round">1</div>
          <p>Данные для входа</p>
        </div>
        <hr />
        <div className="register__step">
          <div className="round">2</div>
          <p>Личная информация</p>
        </div>
        <hr />
        <div className="register__step">
          <div className="round">3</div>
          <p>Представители</p>
        </div>
      </div>

      {stepRegister === 0 && (
        <LoginDetails
          onInputChange={inputChangeHandler}
          onStepChange={stepChangeHandler}
          validationErrors={validationErrors}
        />
      )}
      {stepRegister === 1 && (
        <PersonalInformation
          onInputChange={inputChangeHandler}
          onStepChange={stepChangeHandler}
          selectGender={selectGender}
        />
      )}
      {stepRegister === 2 && (
        <Representatives
          onInputChange={inputChangeHandler}
          onStepChange={stepChangeHandler}
        />
      )}
      {stepRegister === 3 && <SuccessRegistration />}
    </div>
  );
};

export default Register;

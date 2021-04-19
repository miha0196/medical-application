import React from "react";

import "./styles.scss";

const ECardItem = () => (
  <>
    <li className="card card_active">
      <div className="card__img">
        <img src="/img/Vector (1).svg" alt=""></img>
      </div>
      <div className="card__content">
        <div className="card__descr">
          <h2 className="card__title">Информация о пациенте</h2>
          <hr />
          <h3>
            <ul>
              <li>Ваши личные данные</li>
              <li>Рекомендации врачей</li>
              <li>История болезней</li>
            </ul>
          </h3>
        </div>
      </div>
    </li>
    <li className="card">
      <div className="card__img">
        <img src="/img/Vector (2).svg" alt=""></img>
      </div>
      <div className="card__content">
        <div className="card__descr">
          <h2 className="card__title">Результаты анализов</h2>
          <hr />
          <h3>Вы можете узнать здесь результаты своих анализов</h3>
        </div>
      </div>
    </li>
    <li className="card">
      <div className="card__img">
        <img src="/img/Vector (5).svg" alt=""></img>
      </div>
      <div className="card__content">
        <div className="card__descr">
          <h2 className="card__title">Добавить информацию</h2>
          <hr />
          <h3>
            Добавляйте в свою электронную медицинскую карту новые данные
          </h3>
        </div>
      </div>
    </li>
    <li className="card">
      <div className="card__img">
        <img src="/img/Vector (6).svg" alt=""></img>
      </div>
      <div className="card__content">
        <div className="card__descr">
          <h2 className="card__title">История приемов</h2>
          <hr />
          <h3>
            Вся информация о полученных услугах за все время хранится здесь
          </h3>
        </div>
      </div>
    </li>
  </>
);

export default ECardItem;

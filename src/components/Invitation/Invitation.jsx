import React from "react";
import "./invitatiion.scss";
export const Invitation = () => {
  return (
    <div className="invitation">
      <div className="invitation-box">
        <div className="invitation-input">
          <p className="title">
            Приглашаем к сотрудничеству производителей и поставщиков одежды,
            обуви и аксессуаров
          </p>
          <input className="input" placeholder="Ваше имя" type="text" />
          <input className="input" placeholder="Номер телефона" type="text" />
          <input
            className="input"
            placeholder="Электронная почта"
            type="text"
          />
          <div className="accept-data">
            <img className="circle" src="/src/assets/Image/circle.svg" alt="" />
            <p className="accept">
              Даю согласие на обработку персональных данных
            </p>
          </div>
          <div className="button">
            Отправить
            <svg
              className="arrow-svg"
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="4"
              viewBox="0 0 26 4"
              fill="none"
            >
              <path
                d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z"
                fill="#FFFDF5"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

/* eslint-disable react/prop-types */
import React from "react";
import "./modal.scss";
export const Modal = (props) => {
  let arr = props.user;
  let user = arr[arr.length - 1];
  console.log(user);
  return (
    <div className={`modal ${props.isOpen ? "open" : "closed"}`}>
      <div className="content">
        <div className="message">
          <div className="btn-close" onClick={props.closeModal}>
            <img
              className="circle"
              src="/src/assets/Image/button-close.svg"
              alt=""
            />
            <img
              className="line"
              src="/src/assets/Image/close-line.svg"
              alt=""
            />
          </div>
          <p className="text-application">Ваша заявка обрабатывается. </p>

          <p className="text-contact">
            Наш специалист с Вами свяжется в ближайшее время.{" "}
          </p>
          <p className="user-info">
            {" "}
            Детали заказа отправлены на почту:{" "}
            <span className="email">{user.email + " "}</span>
          </p>
          <p className="gratitude">Спасибо!</p>
          <img
            className="elem-order"
            src="/src/assets/Image/elem_order.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

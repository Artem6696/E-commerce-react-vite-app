/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./accordion.scss";

export const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accardion">
      <div className={`accordion-item ${isActive ? "active" : ""}`}>
        <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
          <div className="title">{title}</div>
          <div className="plus">
            <img className="img" src="/src/assets/Image/plus.svg" alt="" />
          </div>
        </div>
        <div className="stripes"></div>
        <div className={`accordion-content ${isActive ? "active" : ""}`}>
          {content}
        </div>
      </div>
    </div>
  );
};

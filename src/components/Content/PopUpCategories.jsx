/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./PopUpCategories.scss";
import {  useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const PopUpCategories = ({ onCategoryChange, style }) => {
  const navigate = useNavigate();
  
  const visible = useSelector((state) => state.app.visible);
  
  const handleCategoryClick = (category) => {
    navigate("/catalog/" + category);
    onCategoryChange(category);
  };
  
  return (
    <div
      style={style}
      className={`pop-up-categories ${visible ? "visible" : ""}`}
    >
      <div className="logo">
        <img className="logo-img" src="/src/assets/Image/logo_1.svg" alt="" />
        <ul className="navbar-item">
          <li className="item" onClick={() => handleCategoryClick("all")}>
            Каталог
          </li>
          <li className="item" onClick={() => handleCategoryClick("Футболки")}>
            Футболки
          </li>
          <li className="item" onClick={() => handleCategoryClick("Джинсы")}>
            Джинсы
          </li>
          <li className="item" onClick={() => handleCategoryClick("Шорты")}>
            Шорты
          </li>
          <li className="item" onClick={() => handleCategoryClick("Брюки")}>
            Брюки
          </li>
          <li className="item" onClick={() => handleCategoryClick("Толстовки")}>
            Толстовки
          </li>
          <li className="item" onClick={() => handleCategoryClick("Поло")}>
            Поло
          </li>
          <li className="item" onClick={() => handleCategoryClick("Жилеты")}>
            Жилеты
          </li>
          <li className="item" onClick={() => handleCategoryClick("Рубашки")}>
            Рубашки
          </li>
        </ul>
      </div>
    </div>
  );
};

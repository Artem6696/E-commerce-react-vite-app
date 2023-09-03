/* eslint-disable react/prop-types */
import React, { useState } from "react";
import "./PopUpCategories.scss";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../redux/slice/appSlice";
import { useNavigate } from "react-router-dom";

export const PopUpCategories = ({ onCategoryChange, style }) => {

  const count = useSelector((state) => state.app.count);
  const dispatch = useDispatch();
  const visible = useSelector((state) => state.app.visible)
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();
  const handleCategoryClick = (category) => {
    
    navigate("/catalog/" + category);
    onCategoryChange(category)
  };
  return (
    <div style={style}
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
          <li className="item">Брюки</li>
          <li className="item">Толстовки</li>
          <li className="item">Поло</li>
          <li className="item">Жилеты</li>
          <li className="item">Рубашки</li>
        </ul>
      </div>
    </div>
  );
};

import React, { useState } from "react";
import "./content.scss";
import { PopUpCategories } from "./PopUpCategories";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export const Content = () => {
  const [isPopUpVisible, setIsPopUpVisible] = useState(false);
  const visibleContnetLeftSide = useSelector((state) => state.app.visible);
  console.log(visibleContnetLeftSide);
  return (
    <div className="content">
      <div className="sections">
        {/* <PopUpCategories/> */}
        <PopUpCategories isVisible={isPopUpVisible} />
        <div className="left-section">
          {!visibleContnetLeftSide && (
            <>
              {" "}
              <div className="item1">
                <img
                  className="item1-img"
                  src="/src/assets/Image/item-content1.png"
                  alt=""
                />
              </div>
              <div className="title-box">
                <p className="title">
                  Добро пожаловать в <span className="title-span">Cokteil</span>
                </p>
              </div>
              <div className="title-box-bottom">
                <p className="title">
                  Экономим Ваше время! Предлагаем лучшие цены! Доставляем в
                  кратчайшие сроки!
                </p>
              </div>
            </>
          )}

          {/*  */}
        </div>
        <div className="right-section">
          <div className="item2">
            <img
              className="item2-img"
              src="/src/assets/Image/item-content2.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="catalog-elipse">
        <Link to="/catalog/all">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="193"
            height="193"
            viewBox="0 0 193 193"
            fill="none"
          >
            <text className="text-svg" x="35" y="100">
              Каталог
            </text>
            <circle cx="96.5" cy="96.5" r="96" />
          </svg>

          <svg
            className="inner-svg"
            xmlns="http://www.w3.org/2000/svg"
            width="80"
            height="10"
            fill="none"
          >
            <path
              d="M79.3536 4.35355C79.5488 4.15829 79.5488 3.84171 79.3536 3.64645L76.1716 0.464466C75.9763 0.269204 75.6597 0.269204 75.4645 0.464466C75.2692 0.659728 75.2692 0.976311 75.4645 1.17157L78.2929 4L75.4645 6.82843C75.2692 7.02369 75.2692 7.34027 75.4645 7.53553C75.6597 7.7308 75.9763 7.7308 76.1716 7.53553L79.3536 4.35355ZM0 4.5H79V3.5H0V4.5Z"
              fill="#514A7E"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

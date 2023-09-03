import React from "react";
import "./basket.scss";
import { Header } from "../components/Header/Header";
import { useSelector } from "react-redux";
import { BasketItem } from "../components/BasketItem/BasketItem";
import { Footer } from "../components/Footer/Footer";
import { PopUpCategories } from "../components/Content/PopUpCategories";

export const Basket = () => {
  const basket = useSelector((state) => state.basket.basketUser);
  const elemVisibleBasket = true
  const getTotal = () => {
    let productCount = 0;
    let totalPrice = 0
    basket.forEach((item) => {
      productCount += item.quantity;
      totalPrice += item.price * item.quantity
    });
    return {productCount, totalPrice};
  };
  const style = {
    position: 'fixed'
  }
  return (
    <div className="wrapper">
      <Header />
     
      <div className="basket-info">
        <h3 className="basket-title">Коризна</h3>{" "}
        <svg className="basket-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
        >
          <path
            d="M23.6117 11.3333V8.54715C23.6117 7.67896 23.4407 6.81928 23.1084 6.01718C22.7762 5.21509 22.2892 4.48628 21.6753 3.87238C21.0614 3.25849 20.3326 2.77152 19.5305 2.43928C18.7284 2.10704 17.8687 1.93604 17.0005 1.93604C16.1324 1.93604 15.2727 2.10704 14.4706 2.43928C13.6685 2.77152 12.9397 3.25849 12.3258 3.87238C11.7119 4.48628 11.2249 5.21509 10.8927 6.01718C10.5604 6.81928 10.3894 7.67896 10.3894 8.54715V15.1583C10.3894 15.4087 10.4889 15.649 10.6661 15.8261C10.8432 16.0032 11.0834 16.1027 11.3339 16.1027C11.5844 16.1027 11.8246 16.0032 12.0017 15.8261C12.1788 15.649 12.2783 15.4087 12.2783 15.1583V13.2221H19.8339V11.3333H12.2783V8.54715C12.2783 7.29473 12.7758 6.09362 13.6614 5.20803C14.547 4.32244 15.7481 3.82492 17.0005 3.82492C18.253 3.82492 19.4541 4.32244 20.3397 5.20803C21.2252 6.09362 21.7228 7.29473 21.7228 8.54715V15.111C21.7228 15.3615 21.8223 15.6017 21.9994 15.7789C22.1765 15.956 22.4167 16.0555 22.6672 16.0555C22.9177 16.0555 23.1579 15.956 23.335 15.7789C23.5121 15.6017 23.6117 15.3615 23.6117 15.111V13.2221H28.3339V30.2221H5.66721V13.2221H8.50054V11.3333H3.77832V30.3071C3.77832 30.7856 3.96837 31.2444 4.30667 31.5827C4.64496 31.921 5.10379 32.111 5.58221 32.111H28.4189C28.8973 32.111 29.3561 31.921 29.6944 31.5827C30.0327 31.2444 30.2228 30.7856 30.2228 30.3071V11.3333H23.6117Z"
            fill="#121212"
          />
        </svg>
        <p className="basket-count">{getTotal().productCount}</p>
      </div>
      <div className="content">
      <PopUpCategories style={style}/>
      <div className="items"> {basket.map((item) => (
        <BasketItem
        key={item._id}
        _id={item._id}
        name={item.name}
        photosURL={item.photosURL}
        colors={item.colors}
        price={item.price}
        sizes={item.sizes}
        quantity={item.quantity}
        />
      ))}</div>
      </div>
      <div className="total">
        <p className="total-title">Итог: <span className="total-price">{getTotal().totalPrice}</span></p>
        <p className="product-quantity">Товары {getTotal().productCount}шт</p>
      </div>
      <Footer elemVisibleBasket={elemVisibleBasket}/>
    </div>
  );
};

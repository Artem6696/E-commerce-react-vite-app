import React from "react";
import { Header } from "../components/Header/Header";
import "./favorite.scss";
import { PopUpCategories } from "../components/Content/PopUpCategories";
import { useSelector } from "react-redux";

import { CardProduct } from "../components/CardProduct/CardProduct";
import { Footer } from "../components/Footer/Footer";

export const Favorite = () => {
  const favorite = useSelector((state) => state.favorite.favoriteUser);



  return (
    <div className="wrapper-favorite">
      <Header />
      <div className="favorite-info">
        <h3 className="basket-title">Избранное</h3>
        <svg
          className="favorite-svg"
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
        >
          <path
            d="M9.01512 17.0166C8.89131 17.0162 8.77111 16.9752 8.6733 16.8999C5.55769 14.4999 3.41151 12.4333 1.90974 10.3944C-0.00669733 7.78883 -0.443779 5.38328 0.6097 3.24439C1.36058 1.71661 3.51798 0.466611 6.0396 1.19439C7.24188 1.53869 8.29085 2.27705 9.01512 3.28883C9.7394 2.27705 10.7884 1.53869 11.9906 1.19439C14.5067 0.477722 16.6697 1.71661 17.4205 3.24439C18.474 5.38328 18.0369 7.78883 16.1205 10.3944C14.6187 12.4333 12.4726 14.4999 9.35694 16.8999C9.25913 16.9752 9.13893 17.0162 9.01512 17.0166ZM4.60508 2.09994C4.00507 2.07679 3.41003 2.21608 2.88384 2.50286C2.35765 2.78964 1.92016 3.21308 1.61835 3.72772C0.749791 5.49439 1.14204 7.46105 2.81752 9.73328C4.59811 12.0103 6.68313 14.0363 9.01512 15.7555C11.3467 14.038 13.4317 12.0139 15.2127 9.73883C16.8938 7.46105 17.2805 5.49439 16.4119 3.73328C15.8515 2.62217 14.1704 1.73883 12.2988 2.26105C11.6987 2.43689 11.1424 2.73534 10.6656 3.13721C10.1889 3.53907 9.80224 4.03545 9.53065 4.59439C9.48844 4.69628 9.41662 4.78343 9.32432 4.84477C9.23203 4.9061 9.12343 4.93885 9.01232 4.93885C8.90121 4.93885 8.79261 4.9061 8.70032 4.84477C8.60802 4.78343 8.5362 4.69628 8.49399 4.59439C8.22444 4.03405 7.83849 3.53652 7.36143 3.1344C6.88438 2.73228 6.32699 2.43467 5.7258 2.26105C5.36155 2.15617 4.98437 2.10195 4.60508 2.09994Z"
            fill="#121212"
          />
        </svg>
        <p className="basket-count">{favorite.length}</p>
      </div>
      <div className="content">
       
        <PopUpCategories />
        <div className="favorite-list">
        {favorite.map((product) => (
          <CardProduct
            key={product._id}
            _id={product._id}
            name={product.name}
            photosURL={product.photosURL}
            price={product.price}
            colors={product.colors}
            sizes={product.sizes}
          />
        ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

import React, { useEffect, useState } from "react";

import { useParams } from "react-router-dom";
import "./productSearch.scss";
import { Header } from "../components/Header/Header";
import { PopUpCategories } from "../components/Content/PopUpCategories";
import axios from "axios";
import configAPI from "../utils/configAPI";
import { CardProduct } from "../components/CardProduct/CardProduct";
import { Footer } from "../components/Footer/Footer";
import imgInCopm from "../assets/Image/noCart.png";
export const ProductsSearch = () => {
  const { value } = useParams();
  const [findProducts, setFindProducts] = useState([]);
  let upperCaseFirstLetter = (string) => {
    return string.toString().charAt(0).toUpperCase() + string.substring(1);
  };
  console.log(value);
  const correctRequest = upperCaseFirstLetter(value);
  console.log(correctRequest);
  useEffect(() => {
    const getDataBySearchName = async () => {
      const response = await axios.get(
        configAPI.serverGetProductByName + correctRequest
      );
      setFindProducts(response.data);
    };
    getDataBySearchName();
  }, [value]);

  console.log(findProducts);
  return (
    <div className="wrapper-search">
      <Header />
      <div className="content">
        <PopUpCategories />
        <div className="find-products">
          {findProducts.length > 0 ? (
            findProducts.map((card) => (
              <CardProduct
                _id={card._id}
                key={card._id}
                name={card.name}
                description={card.description}
                photosURL={card.photosURL}
                price={card.price}
              />
            ))
          ) : (
            <div className="not-founds">
              <img className="image" src={imgInCopm} alt="" />
              <p className="text">К сожалению ничего нее нашлось:(</p>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

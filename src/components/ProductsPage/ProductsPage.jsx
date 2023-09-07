/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import "./productPage.scss";
import { CardProduct } from "../CardProduct/CardProduct";
import { useDispatch, useSelector } from "react-redux";
import { PopUpCategories } from "../Content/PopUpCategories";
import { setSelectedCategory } from "../../redux/slice/appSlice";
import { useParams } from "react-router-dom";

import axios from "axios";
import configAPI from "../../utils/configAPI";
import { Loader } from "../Loader/Loader";

export const ProductsPage = ({ catalogProductList }) => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();
  const selectedCategory = useParams().category;

  const handleCategoryChange = (category) => {
    dispatch(setSelectedCategory(category));
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (selectedCategory === "all") {
          setProducts(catalogProductList);
        } else {
          const response = await axios.get(
            configAPI.serverGetProductByCategory + selectedCategory
          );
          if (response.data) {
            const filterCategoryList = response.data;
            setProducts(filterCategoryList);
          }
        }
      } catch (error) {
        console.error("Ошибка при получении данных:", error);
      }
    };
    fetchData();
  }, [selectedCategory, catalogProductList]);

  const popUpProps = {
    style: {
      position: "fixed",
    },
    onCategoryChange: handleCategoryChange,
  };

  return (
    <>
    {
      products ? (
        <div className="products-page">
        <PopUpCategories {...popUpProps} />
        <div className="product-list">
          
          {products && products.map((product) => (
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
      ) : (
        <Loader/>
      )
    }
    </>
  );
};


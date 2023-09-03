import React from "react";
import { Header } from "../Header/Header";
import "./catalog.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { ProductsPage } from "../ProductsPage/ProductsPage";
import { useSelector } from "react-redux";
import { useGetAllProductsQuery } from "../../redux/api/api";

import { Footer } from "../Footer/Footer";
import { Loader } from "../Loader/Loader";
export const Catalog = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const catalogQuery = useGetAllProductsQuery(currentPage).data;
  const [catalogProductList, setCatalogProductList] = useState([]);

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const basket = useSelector((state) => state.basket);

  const category = useSelector((state) => state.app.selectedCategory);

  const elemVisibleCatalog = true;

  useEffect(() => {
    if (catalogQuery) {
      const catalogList = catalogQuery && catalogQuery.payload;
      setCatalogProductList(randomizeItem(catalogList));
    }
  }, [catalogQuery, currentPage]);

  function randomizeItem(arr) {
    const randomizeArray = [...arr];
    randomizeArray.sort(() => Math.random() - 0.5);
    return randomizeArray;
  }

  return (
    <div className="wrapper-catalog">
      <Header />

      {category === "all" ? (
        <p className="category-nav">
          категория: <span>Все товары</span>
        </p>
      ) : (
        <p className="category-nav">
          категория: <span>{category}</span>
        </p>
      )}
      <ProductsPage catalogProductList={catalogProductList} />

      <div className="buttons">
        {currentPage > 1 && (
          <button onClick={prevPage}>Предыдущая страница</button>
        )}
        <div>{currentPage}</div>
        <button
          onClick={() => {
            setCurrentPage(currentPage + 1);
          }}
        >
          {" "}
          Следущая страница
        </button>
      </div>

      {<Footer elemVisibleCatalog={elemVisibleCatalog} />}
    </div>
  );
};

import React from "react";
import { Header } from "../Header/Header";
import "./catalog.scss";
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
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Добавляет плавную анимацию прокрутки вверх
      });
    }
  };
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Добавляет плавную анимацию прокрутки вверх
    });
  }


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
console.log(category);
  return (
<>
{catalogQuery ? (
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

{category == 'all' && <div className="buttons">    
    {currentPage > 0 && (
      <button className="button" onClick={prevPage}>Предыдущая </button>
    )}
    <div className="current-page"><p className="page">{currentPage}</p></div>
 {<button className="button"
    onClick={nextPage}
    style={{ visibility: currentPage === catalogQuery?.pages ? 'hidden' : 'visible' }}
  >
      {" "}
      Следущая
    </button>}
  </div>}

  {<Footer elemVisibleCatalog={elemVisibleCatalog} />}
</div>
): (
  <Loader/>
)}
</>
  );
};

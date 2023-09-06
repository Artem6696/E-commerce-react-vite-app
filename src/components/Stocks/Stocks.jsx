/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';

import {  useGetAllProductsQuery } from '../../redux/api/api'
import { CardProduct } from '../CardProduct/CardProduct';
import './stocks.scss'

export const Stocks = (props) => {
  const prodQuery = useGetAllProductsQuery().data
  const [catalogProductList, setCatalogProductList] = useState([]);
  useEffect(() => {
    if(prodQuery){
      const productsList =  prodQuery && prodQuery.payload;
      setCatalogProductList(randomizeItem(productsList))
    }
  }, [prodQuery])
 
  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  function randomizeItem(arr) {
    const randomizeArray = [...arr];
    randomizeArray.sort(() => Math.random() - 0.5);
    return randomizeArray;
  }
console.log(props.title);
  return (
    <div className='stocks-container'>
      <h1 className='offer'>{props.title} </h1>
      <p className='offer-stock'>{props.subtitle}</p>
      <Slider  {...sliderSettings}>
        {prodQuery &&
          catalogProductList.map((card) => (
            <div key={card._id}>
              <CardProduct
                key={card._id}
                _id={card._id}
                name={card.name}
                photosURL={card.photosURL}
                price={card.price}
                colors={card.colors}
                sizes={card.sizes}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css';

import {  useGetAllProductsQuery } from '../../redux/api/api'
import { CardProduct } from '../CardProduct/CardProduct';
import './stocks.scss'

export const Stocks = () => {
  const prodQuery = useGetAllProductsQuery().data
  // const test = useFetchAllProducts().data
  // console.log(test);
 
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

  return (
    <div className='stocks-container'>
      <h1 className='offer'>Успей купить! </h1>
      <p className='offer-stock'>Акции</p>
      <Slider  {...sliderSettings}>
        {prodQuery &&
          prodQuery.payload.map((card) => (
            <div key={card._id}>
              <CardProduct
                name={card.name}
                description={card.description}
                photosURL={card.photosURL}
                price={card.price}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};

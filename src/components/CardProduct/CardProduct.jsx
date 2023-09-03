/* eslint-disable react/prop-types */
import React from 'react'
import './cardProduct.scss'
import { Link } from 'react-router-dom'
import { useDispatch} from 'react-redux'
import { addToBasket } from '../../redux/slice/basketSlice'
export const CardProduct = ({_id, name, photosURL, description, price, colors, sizes }) => {
  
    const dispatch = useDispatch()
  return (
    <div className="product-card" key={_id}>
        <img className="product-image" src={photosURL} alt="Product" />
        <div className="product-price">{price}KZT</div>
       
            <div className="product-name">{name}</div>
            <div className="product-actions">
                <Link to={'/product/' + _id}>
                <div className='button_1'>Подробнее
                    <svg className='arrow-svg' xmlns="http://www.w3.org/2000/svg" width="26" height="4" viewBox="0 0 26 4" fill="none">
                    <path d="M25.1768 2.17678C25.2744 2.07915 25.2744 1.92085 25.1768 1.82322L23.5858 0.232233C23.4882 0.134602 23.3299 0.134602 23.2322 0.232233C23.1346 0.329864 23.1346 0.488155 23.2322 0.585786L24.6464 2L23.2322 3.41421C23.1346 3.51184 23.1346 3.67014 23.2322 3.76777C23.3299 3.8654 23.4882 3.8654 23.5858 3.76777L25.1768 2.17678ZM0 2.25H25V1.75H0V2.25Z" fill="#121212"/>
                </svg>
                </div>
                </Link>
                <img className="favorite"  src="/src/assets/Image/favorite1.svg" alt="Favorite" />
                <img className="basket" onClick={()=> dispatch(addToBasket({_id,  name, photosURL, colors, price, sizes }))} src="/src/assets/Image/basket1.svg" alt="Basket" />
            </div>
        
    </div>
)
}

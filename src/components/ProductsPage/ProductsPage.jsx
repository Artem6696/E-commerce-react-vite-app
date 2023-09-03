/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import './productPage.scss'
import { CardProduct } from '../CardProduct/CardProduct'
import { useDispatch, useSelector } from 'react-redux';
import { PopUpCategories } from '../Content/PopUpCategories';
import { setSelectedCategory } from '../../redux/slice/appSlice';
import { useParams } from 'react-router-dom';


export const ProductsPage = ({productList}) => {
    const visiblePopUp = useSelector((state) => state.app.visible)
    // const [selectedCategory, setSelectedCategory] = useState(null)
    // const selectedCategory = useSelector((state) => state.app.selectedCategory);
    const dispatch = useDispatch();
    const selectedCategory  = useParams().category
    const handleCategoryChange = (category) => {
       dispatch(setSelectedCategory(category))
    }
   

    const filtredProducts = selectedCategory != 'all'
        ? productList.filter((product) => product.category === selectedCategory)
        : productList;

    const popUpProps = {
      style: {
        position: 'fixed'
      },
      onCategoryChange: handleCategoryChange
    }
  return (
    <div className='products-page'>
        
     <PopUpCategories  {...popUpProps}/> 
     <div className='product-list'>

      {filtredProducts && filtredProducts.map((product) => 
       <CardProduct
       key={product._id}
       _id={product._id}
       name={product.name}
       photosURL={product.photosURL}
       price={product.price}
       colors={product.colors}
       sizes={product.sizes}
       />)}
       </div>
    </div>
  )
}

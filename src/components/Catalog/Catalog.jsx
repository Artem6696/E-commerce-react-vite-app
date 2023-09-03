import React from 'react'
import { Header } from '../Header/Header'
import './catalog.scss'
import axios from "axios"
import { useEffect, useState } from "react"
import { ProductsPage } from '../ProductsPage/ProductsPage'
import { useSelector } from 'react-redux'
// import { useGetAllProductsQuery } from '../../redux/api/api'

import { Footer} from '../Footer/Footer'
import { Loader } from '../Loader/Loader'
export const Catalog = () => {
 
  const basket = useSelector((state) => state.basket)
  console.log(basket);

  
  const category = useSelector((state) => state.app.selectedCategory )
  const [productList, setProductList] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const elemVisibleCatalog = true
  useEffect(() => {
    const AllProducts = []
      const getData = async () => {

        const fetchPageCount = async () => {
          const response = await axios.get('http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts');
          setTotalPages(response.data.pages);
        };
        fetchPageCount()
        

        for( let page = 1; page <= totalPages; page++)  {
          const response = await axios.get("http://cepbep.ddns.net:2500/api/shopDB/products/getAllProducts?page="+ page)
          const productOnPage = response.data.payload;
          AllProducts.push(...productOnPage)
          }
          
          const rundomizeProducts = randomizeItem(AllProducts)
        setProductList(rundomizeProducts)
      }

     
      
      getData()
  }, [totalPages])


  function randomizeItem(arr) {
    const randomizeArray = [...arr];
    randomizeArray.sort(() => Math.random() - 0.5);
    return randomizeArray
  }

 
  return (
    <div className='wrapper'>
        
        <Header/> 
  
        {/* <ProductsPage products={products}/> */}
        {/* <p className='category-nav'>Категория: <span>{category && category !== 'all' ? `${category}` : null}</span></p> */}
        {category !== 'all' && <p className='category-nav'> категория : <span> {category}</span> </p>}
        {  totalPages ?  <ProductsPage productList={ productList } />  : <Loader/> 
       }


        
          
      {totalPages && <Footer elemVisibleCatalog={elemVisibleCatalog}/>}
    </div>
  )
}

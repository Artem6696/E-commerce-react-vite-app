import React from 'react'
import './productPage.scss'
import { Header } from '../components/Header/Header'
import { FeedBack } from '../components/feedback/FeedBack'
import { Stocks } from '../components/Stocks/Stocks'
import { Footer } from '../components/Footer/Footer'
import { ProductId } from '../components/ProductId/ProductId'

export const ProductPage = () => {

  return (
   
    <div className='wrapper'>
      <Header/>
      <ProductId/>
      <FeedBack/>
      <Stocks/>
      <Footer/>
    </div>
  )
}

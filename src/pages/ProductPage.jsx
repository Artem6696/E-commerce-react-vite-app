import React from 'react'
import './productPage.scss'
import { Header } from '../components/Header/Header'
import { FeedBack } from '../components/feedback/FeedBack'
import { Stocks } from '../components/Stocks/Stocks'
import { Footer } from '../components/Footer/Footer'
import { ProductId } from '../components/ProductId/ProductId'

export const ProductPage = () => {

  return (
   
    <div className='wrapper-products-page'>
      <Header/>
      <ProductId/>
      <FeedBack/>
      <Stocks title='С этим товаром чаще всего покупают ' subtitle='вам может понравиться'/>
      <Footer/>
    </div>
  )
}

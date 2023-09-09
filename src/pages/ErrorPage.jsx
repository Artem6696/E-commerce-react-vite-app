import React from 'react'
import './errorPage.scss'
import { Header } from '../components/Header/Header'
import myImg from '../assets/Image/error_page.png'
import { PopUpCategories } from '../components/Content/PopUpCategories'
import { Footer } from '../components/Footer/Footer'
export const ErrorPage = () => {
   Footer
  return (
    <div className='wrapper-error '>
        <Header/>
        
        <div className='content'>
        <PopUpCategories/>
        <div className='img-container'>
      
        <img className='img' src={myImg} alt="" />
        </div>
        </div>
        <Footer/>
    </div>
  )
}

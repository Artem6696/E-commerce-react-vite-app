import React from 'react'
import './wrapper.scss'
import { Header } from '../Header/Header'
import { Content } from '../Content/Content'
import { Info } from '../Info/Info'
import { Stocks } from '../Stocks/Stocks'
import { FeedBack } from '../feedback/FeedBack'
import { Faq } from '../FAQ/Faq'
import { Cooperation } from '../Cooperation/Cooperation'
import { Invitation } from '../Invitation/Invitation'
import { Footer } from '../Footer/Footer'


export const LandingPage = () => {

  return (
    
    <div className='wrapper'>
        <Header/>
        <Content/>
        <Info/>
        <Stocks/>
        <FeedBack/>
        <Faq/>
        <Cooperation/>
        <Invitation/>
        <Footer/>
    </div>
   
  )
}

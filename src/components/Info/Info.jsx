import React from 'react'
import './info.scss'
export const Info = () => {
  return (
    <div className='info'>
      {/* <img className='aside' src="/src/assets/Image/EllipseAside.svg" alt="" /> */}
        <div className='title-box'>
            <p className='title'>Почему выбирают нас?</p>
            
        </div>
        <div className='nav'> <img className='nav-button' src="/src/assets/Image/up.svg" alt="" /></div>
        
        <div className='about-box-top'>
            
           <div className='about-eclipse'>
           <p className='about'>Скидки постоянным клиентам от 5%</p>
           <img className='img1' src="/src/assets/Image/Ellipse_1.svg"></img>
           </div>
            <p className='about'>Предлагаем самые выгодные цены</p>
            <div className='about-eclipse'>
            <p className='about'>Наши покупатели всегда остаются довольны</p>
            <img className='img2' src="/src/assets/Image/Ellipse_2.svg" alt="" />
            </div>
            <p className='about'>Ширикий ассортимент товаров для всей семьи</p>
            
        </div>
            
        <div className='about-box-bottom'>

            <div  className='about-eclipse'style={{display: 'flex'}}>
           
            <p className='about'>Возможность доставки в любой город Беларуси </p>
            <img className='img3' src="/src/assets/Image/Ellipse_3.svg" alt="" />
            </div>
            <div className='about-eclipse'>
            <p className='about'>Пункты выдачи заказов рядом с домом</p>
            <img className='img4' src="/src/assets/Image/Ellipse_4.svg" alt="" />
            </div>
        </div>
        
    </div>
  )
}

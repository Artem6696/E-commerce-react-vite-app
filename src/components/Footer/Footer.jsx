/* eslint-disable react/prop-types */
import React from 'react'
import './footer.scss'
import { Link, useNavigate } from 'react-router-dom';


export const Footer = ({elemVisibleCatalog, elemVisibleBasket}) => {
    
Link
  return (
    <div className='footer'>
     { elemVisibleCatalog && <div className='hide-for-catalog'></div> }
     { elemVisibleBasket && <div className='hide-for-basket'></div>}
        <div className='footer-content'>
      
        <div className='block-information'>
            
            <p className='title'>Информация</p>

           <Link to={'/'}> <p className='footer-link' >Главная</p></Link>
            <p className='footer-link' >Акции</p>
            <p className='footer-link' >Каталог</p>
            <p className='footer-link' >Возврат</p>
            <p className='footer-link' >Доставка</p>
            <p className='footer-link' >Партнёрам</p>
            <p className='footer-link' >Способы оплаты</p>
            <p className='footer-link' >Как сделать заказ?</p>
        </div>
        <div className='block-information'>
            <p className='title'>Мой кабинет</p>

            <p className='footer-link' >Мои заказы</p>
            <p className='footer-link' >Мои адреса</p>
            <p className='footer-link' >Мои скидки</p>
            <p className='footer-link' >Моя информация</p>
        </div>
        <div className='block-information'>
            <p className='title'>Контактная информация</p>
            <div className='buissnes-info'>
                <p className='name'>ИП Вишневский Иван Сергеевич государственная регистрация №690867884 от 21.08.2023.</p>
                <p className='adress'>Логойским горисполкомом Защита прав потребителей +375259990755</p>
            </div>
        </div>
        <div className='block-information'>
            <p className='title'>Соц. сети</p>
            <div className='social-networks'>
                <img className='social-img' src="/src/assets/Image/group.svg" alt="" />
            </div>
            <div className='number'>
                <img className='phone-img' src="/src/assets/Image/phone.svg" alt="" />
                <p className='phone'>+77086379529</p>
            </div>
            <div className='chart'>
                <img className='chart-img' src="/src/assets/Image/time.svg" alt="" />
                <p className='chart-time'>круглосуточно, без выходных</p>
            </div>
        </div>
        </div>
    </div>
  )
}

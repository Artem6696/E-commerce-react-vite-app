import React from 'react'
import './feedback.scss'

export const FeedBack = () => {
  return (
    <div className='feedback'>
        <h1 className='text'>Отзывы наших покупателей</h1>


        <div className='feedbox-container'>
        <div className='feedback-box'>
            <div className='feedback-img'> 
                <img src="/src/assets/Image/photo.png" alt="" />
            </div>

            <div className='feedback-description'>

                <div className='rating'>
                    <img className='rating-img' src="/src/assets/Image/star.svg" alt="" />
                    <img className='rating-img' src="/src/assets/Image/star.svg" alt="" />
                    <img className='rating-img' src="/src/assets/Image/star.svg" alt="" />
                    <img className='rating-img' src="/src/assets/Image/star.svg" alt="" />
                    <img className='rating-img' src="/src/assets/Image/star.svg" alt="" />
                </div>

                <div className='title'>
                    <p className='text'>Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. </p>
                </div>
                <div className='bottom-box'>
                        <div className='name'><p className='name-text'>Анна Котлова</p></div>
                        <div className='date'><p className='date-text'>23.05.2021</p></div>
                </div>
            </div>
        </div>

        <div className='feedback-box'>
            <div className='feedback-img'> 
                <img src="/src/assets/Image/photo2.png" alt="" />
            </div>

            <div className='feedback-description'>

                <div className='rating'>
                <img className='rating-img' src="/src/assets/Image/star.svg" alt="" />
                    <img className='rating-img' src="/src/assets/Image/star.svg" alt="" />
                    <img className='rating-img' src="/src/assets/Image/star.svg" alt="" />
                    <img className='rating-img' src="/src/assets/Image/star.svg" alt="" />
                    <img className='rating-img' src="/src/assets/Image/star.svg" alt="" />
                </div>

                <div className='title'>
                    <p className='text'>Платье село отлично! Хороший материал. Буду заказывать еще, осталась очень довольна. </p>
                </div>
                <div className='bottom-box'>
                        <div className='name'><p className='name-text'>Анна Котлова</p></div>
                        <div className='date'><p className='date-text'>23.05.2021</p></div>
                </div>
            </div>
        </div>
        <div className='button'>
            <img src="/src/assets/Image/button.svg" alt="" />
        </div>
        </div>
        <div className='add-feedback'><p>Добавить отзыв</p></div>
    </div>
  )
}

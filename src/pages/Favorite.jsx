import React from 'react'
import { Header } from '../components/Header/Header'
import './favorite.scss'
import { PopUpCategories } from '../components/Content/PopUpCategories'
import { useSelector } from 'react-redux'
export const Favorite = () => {
    const favorite = useSelector((state) => state.favorite.favoriteUser)
    console.log(favorite);
  return (
    <div className='wrapper-favorite'>
        <Header/>
       <div className='content'> <PopUpCategories/></div>
    </div>
  )
}

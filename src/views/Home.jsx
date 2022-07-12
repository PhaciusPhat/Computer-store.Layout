import React, { useEffect } from 'react'
import Header from '../components/Header'
import Carousel from './../components/Carousel';
import Brands from './../components/Brands';
import Categories from './../components/Categories';
import TopRatingProducts from '../components/TopRatingProducts';

function Home() {
    
  return (
    <>
        <Header/>
        <Carousel/>
        <TopRatingProducts/>
    </>
  )
}

export default Home
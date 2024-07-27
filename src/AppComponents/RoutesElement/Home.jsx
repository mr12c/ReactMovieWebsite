import React from 'react'
import MainCarousel from '../MainCarousel'
import MovieContainer from '../../uiComponents/movieContainer'
import CategoryContainer from '../../uiComponents/CategoryContainer'
function Home() {
  return (

     <>
      <MainCarousel/> 
      <MovieContainer label={" Top Actions Movies"} range={[0,14]}/>
      <MovieContainer label={"Latest Movies"} range={[14,28]}/>
      <CategoryContainer/>
      <MovieContainer label={"comedy"} range={[28,32]}/>
      <MovieContainer label={"Horror"} range={[32,40]}/>
     </>
       
  )
}

export default Home
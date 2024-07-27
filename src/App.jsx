 import React from 'react'
import MainCarousel from './AppComponents/MainCarousel'
import MovieContainer from './uiComponents/movieContainer'
import { Outlet } from 'react-router-dom'
import Footer from './AppComponents/Footer'
 function App() {
   
   return (
    <div className='container2'>
     <Outlet></Outlet>
     <Footer></Footer>
   </div>
   )
 }
 
 export default App
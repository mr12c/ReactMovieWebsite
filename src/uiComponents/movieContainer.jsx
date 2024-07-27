import React, { useEffect } from 'react'
import { fetchDataFromApi2 } from '../utils/fetchData';
import { useState } from 'react';
import MovieImg1 from './MovieImg1';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentMovie } from '../App/AppSlice';
import { NavLink } from 'react-router-dom';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
 
SwiperCore.use([Autoplay, Pagination]);
function MovieContainer({label,range}) {
  const dispatch  = useDispatch()
    const [array,setArray] = useState();
   const {ActionMovie} = useSelector(state=>state.AppSlice)
   const [data,setData] = useState();
   const [width,setwidth] = useState(window.innerWidth )
   window.addEventListener('resize',()=>{
    setwidth(window.innerWidth)
   },width)
   useEffect(()=>{
    
    setData(ActionMovie?.movies)
    console.log(data)
   },[ActionMovie]) 
   function returnNumber (){
    if(width<500){
      return 3;
    }
    else {
      return 8;
    }
   }
   function returnSlidePerGroup(){
    if(width<500){
      return 1;
    }
    else {
      return 4;
    }
   }

   function returngapGroup(){
    if(width<500){
      return 5;
    }
    else {
      return 10;
    }
   }


   useEffect(()=>{
    if(window.innerWidth<500){
     setArray([1,2,3])
    }
    else if(window.innerWidth>500 && window.innerWidth<900){
     setArray([1,2,3,4])}
     else if(window.innerWidth>900){
     setArray([1,2,3,4,5,6,7,8])}
 
},[window.innerWidth])
  return (
    <div className='w-[2049px] max-w-[97%] mx-auto movieContainer  mt-[1.4rem] '>
        <h1 className='text-[1.4rem] font-medium pb-4'>{label}</h1>
         <div className='w-[95%] mx-auto flex gap-3 *:rounded-sm overflow-auto'>
      
     
       



     {data?  <Swiper className={` w-full swiper-container ${width<500? "" : "py-4"}`}  
      // install Swiper modules
      
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={returngapGroup()}
      slidesPerView={returnNumber()}
      // autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerGroup={returnSlidePerGroup()} 
      // loop={true} // Enable continuous loop
      
      navigation
     
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
       {data?.map((item,index)=>
            index>= range[0]  && index<= range[1]  ?<SwiperSlide ><NavLink to="/movieDetailPage" onClick={() => {
              dispatch(getCurrentMovie(item? item: {}))
            }}><MovieImg1 item={item? item : {}}></MovieImg1></NavLink></SwiperSlide> :""
      )}
      
      
      
    </Swiper> :  array?.map((item)=><div className='w-[20rem] h-[20rem]  loading-box loading-skeleton' key={item}></div>)}
         </div>
    </div>
  )
}

export default MovieContainer
import React, { useEffect } from 'react'
import { fetchDataFromApi2 } from '../utils/fetchData';
import { useState } from 'react';
import MovieImg1 from './MovieImg1';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useDispatch, useSelector } from 'react-redux';
import 'swiper/css';
import { getCurrentMovie } from '../App/AppSlice';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import dayjs from 'dayjs';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
 
SwiperCore.use([Autoplay, Pagination]);
function HorizentalMovieContainer({label}) {

  const [width,setwidth] = useState(window.innerWidth )
  window.addEventListener('resize',()=>{
   setwidth(window.innerWidth)
  },width)

  function returnNumber (){
    if(width<500){
      return 1;
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
    const dispatch = useDispatch()
   const {ActionMovie} = useSelector(state=>state.AppSlice)
   const [data,setData] = useState();
   useEffect(()=>{
    
    setData(ActionMovie?.movies)
    console.log(data)
   },[ActionMovie])
   
 

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
 
 
  return (
    <div className='w-[2049px] max-w-[97%] mx-auto movieContainer  lg:mt-[1.4rem] mt-[90%] '>
        <h1 className='text-[1.4rem] font-medium pb-1'>{label}</h1>
         <div className='w-[95%] mx-auto flex gap-3 *:rounded-sm overflow-auto'>
         <Sdwiper className=' w-full swiper-container  py-4'  
      // install Swiper modules
      
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={10}
      slidesPerView={returnNumber()}
      // autoplay={{ delay: 2500, disableOnInteraction: false }}
      slidesPerGroup={4} 
      // loop={true} // Enable continuous loop
      
      navigation
     
     
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      
       {data?.map((item)=>
               <SwiperSlide >   <NavLink to="/movieDetailPage">
                <div  onClick={()=>{
                dispatch(getCurrentMovie(item))
                 setTimeout(()=>{
                    window.scrollTo(0, 0);
                 },300)
               }} className='relative cursor-pointer  transition group hover:scale-[1.07] hover:z-[1000]'><img src={item.backdrop_path}  className=' rounded-lg ' alt=""></img>
               <p className='text-[white] group-hover:visible invisible flex justify-between'> <span>{item.title}</span> <span>{dayjs(item.first_aired).format("MMM D, YYYY")}</span></p>
               </div>
                </NavLink> </SwiperSlide>
      )}
      
      
      
    </Sdwiper>
         </div>
    </div>
  )
}

export default HorizentalMovieContainer
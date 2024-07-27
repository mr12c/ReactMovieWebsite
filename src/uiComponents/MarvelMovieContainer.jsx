import React, { useEffect } from 'react'
import { fetchDataFromApi2 } from '../utils/fetchData';
import { useState } from 'react';
import MovieImg1 from './MovieImg1';
import { Autoplay,Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import SwiperCore from "swiper"
import { Swiper, SwiperSlide } from 'swiper/react';
import { useSelector } from 'react-redux';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import useFetch2 from '../CustoumHooks/useFetch2';
 
SwiperCore.use([Autoplay, Pagination]);
function MarvelMovieContainer({label,data}) {
     const [slidePerView,setSlidePerView]  = useState()
 
   const [array,setArray] =  useState([])
   const [width,setwidth] = useState(window.innerWidth)
   useEffect(()=>{
    setwidth(window.innerWidth)
   },[width])
   useEffect(()=>{

       if(width<500){
        setArray([1,2,3])
        setSlidePerView(3)
       }
       else if(width>500 && width<760){
        setArray([1,2,3,4])
        setSlidePerView(4)
    }

        else if(width>768 && width<1024){
            setSlidePerView(5)
        setArray([1,2,3,4,5])}
        else if(width>1024 && window.innerWidth<1280){
            setSlidePerView(6)
           setArray([1,2,3,4,5,6,7])
        }
        else if(width>1280 && width<1536){
            setArray([1,2,3,4,5,6])
            setSlidePerView(6)
        }
    
        else{
            setArray([1,2,3,4,5,6,7,8])
            setSlidePerView(8)
        }
    
   },[width])

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
 

 
  return (
    <div className='w-[2049px] max-w-[97%] mx-auto movieContainer   absolute '>
         {data?.results?    <h1 className='text-[1.4rem] font-medium pb-4'>{label}</h1> :   <div className=' bg-white w-[3rem] h-[1rem]loading-skeleton rounded-xl'> </div> }
         <div className='w-[95%] mx-auto flex gap-3 *:rounded-sm overflow-auto'>
         {
            data?.results ?  <Swiper className=' w-full swiper-container  py-4'  
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
            
             {data?.results?.map((item)=>
                     <SwiperSlide > <MovieImg1 item={item? item : {}}></MovieImg1></SwiperSlide>
            )}
            
            
            
          </Swiper> : array?.map((item)=><div className='w-[20rem] h-[20rem] xl:w-[22rem] aspect-1  loading-box loading-skeleton' key={item}></div>)
         }
         </div>
    </div>
  )
}

export default MarvelMovieContainer
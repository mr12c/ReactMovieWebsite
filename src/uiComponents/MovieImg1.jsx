import React, { useState } from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component'
// import Img from "../lazyLoading/Img";
import i5 from "../assets/i5.jpg"
import img from "../assets/poster1.jpg"
import DetailOnHover from './detailOnHover'
function MovieImg1({item}) {
 const [width,setwidth] = useState(window.innerWidth);
 window.addEventListener('resize',() => {
   setwidth(window.innerWidth)
 })
  return (
    <div className='group relative'>
       <img src={item.poster_path} className={` ${width<500? "w-[8rem]" :  "w-[20rem] aspect-1"} aspect-1 md:w-[12rem] rounded-sm xl:w-[18rem] 2xl:w-[20rem]`}></img>
         {width<900 ? "" : <DetailOnHover img={item?.backdrop_path} about={item?.overview} item={item} />}
        
    </div>
    
  )
}

export default MovieImg1
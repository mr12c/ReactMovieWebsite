import React, { useEffect, useState } from 'react'
import i1 from '../../assets/i1.jpg'
import { useSelector } from 'react-redux'
import { current } from '@reduxjs/toolkit'
import { NavLink } from 'react-router-dom'
import HorizentalMovieContainer from '../../uiComponents/HorizentalMovieContainer'
function MovieDetail() {
  const {currentMovie} = useSelector(state=>state.AppSlice)
  const [data,setData] = useState()
  useEffect(()=>{
    setData(currentMovie)
  },[currentMovie])
  return (
    <div>
    <div className=' moviedetaipagef1 relative w-[100vw] h-[100vh] mb-[100px]' >
      <NavLink to="/" className="absolute myhomebtn">Home</NavLink>
    <img src={data?.backdrop_path} className='lg:bg-cover bg-center object-fill  w-full h-full' alt="" />
    <div className='absolute bottom-0 w-full h-[300%] overlay-2m'></div>
     <div className='absolute mx-w-[90%]  w-[1400px] top-[80%]  translate-y-[-50%] max-w-[90%]  lg:flex flex lg:flex-row flex-col gap-10  left-[50%] translate-x-[-45%]'>
        <img src={data?.poster_path} alt=""  className='lg:w-[28rem]  w-[20rem] movieimg aspect-1 rounded-3xl'/>
        <div className='h-fit lg:translate-y-[25%] translate-y-[0%]' >
              <h1 className='lg:text-[3rem] text-[2.2rem] font-semibold'>{data?.title}</h1>
              <div className='mt-8 flex flex-wrap gap-4'>{data?.hasOwnProperty('genres')? data?.genres.map((item)=>
                <span className='lg:px-4 lg:py-1 px-2 py-1 text-nowrap bddedo rounded-full font-medium'>{item}</span>
              ) : ''}</div>
              <p className='lg:w-[70%]  w-[95%] lg:mt-10 mt-2 lg:text-[1rem] text-[0.9em] text-[#9c9fa1]'>{data?.overview}</p>
              
              <div className='lg:*:px-[4rem] *:px-[1rem]  *:py-2 mt-10  flex-wrap  *:bg-white  *:text-black font-semibold *:rounded-xl lg:*:py-[1rem] flex gap-8'>
                <button className='hover:scale-[1.1] transition'>How To Watch?</button>
                <button className=' hover:scale-[1.1] capitalize transition'> <i className="ri-macbook-fill mr-2"></i>watch Trailer</button>
              </div>
        </div>
     </div>
    </div>

    <HorizentalMovieContainer label={"More Like This"} />
     
    </div>
  )
}

export default MovieDetail
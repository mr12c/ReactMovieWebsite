import React, { useEffect, useState } from 'react'
import "../../Styles/Marvelpage.css"
import useFetch2 from '../../CustoumHooks/useFetch2'
import MovieContainer from '../../uiComponents/movieContainer';
import MarvelMovieContainer from '../../uiComponents/MarvelMovieContainer';
import { useDispatch } from 'react-redux';
import { getMarvelMovie } from '../../App/AppSlice';
import { NavLink } from 'react-router-dom';
function DisneyPage() {
    const {data} = useFetch2("disney")
    
    const [mydata,setmydata] = useState(data)
    useEffect(()=>{
        setmydata(data)

    })
    
  return (
    <div className='disneypage w-screen h-screen   overflow-auto  '>
      
      <NavLink to="/" className="absolute myhomebtn">Home</NavLink>
           <div className='w-full h-[190%] absolute overlay-5 '></div>
            <div className='w-[2049px] max-w-[97%] mx-auto left-[50%] translate-x-[-50%] absolute z-[1000] top-[50%] '>
                      <MarvelMovieContainer label={'Disnet specail'} data={mydata}/>
            </div>
    </div>
  )
}

export default DisneyPage;
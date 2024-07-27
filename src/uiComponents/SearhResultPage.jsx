import React from 'react'
import { useEffect,useState } from 'react';
import useFetch2 from '../CustoumHooks/useFetch2';
import { useDispatch, useSelector } from 'react-redux';
import MovieImg1 from './MovieImg1';
import { getMovieData } from '../App/AppSlice';
function SearhResultPage() {
    const dispatch = useDispatch();
    const {searchQuery} = useSelector(state=>state.AppSlice)
    const {data} = useFetch2(searchQuery)
    const [myData,setMyData] = useState()
    useEffect(()=>{
        dispatch(getMovieData(data?.results))
        setMyData(data?.results)
    },[data])
    
  return (
     <>
        {myData?.map((item)=>
         <MovieImg1 item={item}/>
        )} 
     </>
  )
}

export default SearhResultPage
import React, { useState, useEffect } from 'react';
// import useFetch from '../CustoumHooks/useFetch';
import i1 from "../assets/i1.jpg"
import i2 from "../assets/i2.jpg"
import i3 from "../assets/i3.jpg"
import i4 from "../assets/i4.jpg"
import i5 from "../assets/i5.jpg"
import { useRef } from 'react';
// import { fetchDataFromApi2 } from '../utils/fetchData';
import { fetchDataFromApi2 } from '../utils/fetchData';
import { getActionData, getComedyData, getHorrorData, getMovieData,getCurrentMovie, getWatchList } from '../App/AppSlice';
import { useDispatch } from 'react-redux';
import useFetch from '../CustoumHooks/useFetch';
import { NavLink } from 'react-router-dom';
import dayjs from 'dayjs';
const MainCarousel = () => {
   
 const dispatch = useDispatch();
  let  [myCauroselData,setMyCauroselData ] =  useState();
 const {data}  = useFetch();
 useEffect(()=>{
    dispatch(getActionData(data))
    setMyCauroselData(data?.movies)
 },[data])
 

 function truncateParagraph(paragraph) {
  const words = paragraph.split(' ');

  if (words.length > 30) {
      return words.slice(0, 30).join(' ') + '...';
  }

  return paragraph;
}






  const [itemActive, setItemActive] = useState(0);
  const items = [
    { img: i1, title: 'The Nun-2', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
    { img: i2, title: 'Slider 02', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
    { img: i3, title: 'Slider 03', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
    { img: i4, title: 'Slider 04', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
    { img: i5, title: 'Slider 05', description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, neque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, ex.' },
  ];
  
  const countItem = items.length;
  const myref= useRef()
  useEffect(() => {
    const interval = setInterval(() => {
      setItemActive((prev) => (prev + 1) % countItem);
    }, 5000);
    return () => clearInterval(interval);
  }, [countItem]);

  const showSlider = (index) => {
    setItemActive(index);
  };
  window.addEventListener("scroll", (e)=>{
      
  }) 

  return (
    <div>
      <header ref={myref}>
        <div className="logo text-nowrap text-[1.3rem]"> prime video</div>
        <ul className="menu invisible md:visible">
          <li>Home</li>
          <li>premium</li>
          <li>Info</li>
        </ul>
         <NavLink to="/searchPage"><div className="search">
          <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
          </svg>
        </div></NavLink>
      </header>

      <div className="slider">
        <div className="list">
          {myCauroselData?.map((item, index) => (
            index>14 && index<20 ? 
            <div className={`item ${itemActive === index-15 ? 'active' : ''}`} key={index}>
            <img src={item?.backdrop_path} alt={item.title} />
            <div className="content">
              {/* <p>design</p> */}
              <h2 style={{textWrap:'nowrap'}} className='text-[#e5e5e9]'>{item.title}</h2>
              <div className='flex gap-6 firstpara  items-center'><span> {dayjs(
                item?.first_aired
              ).format("MMM D, YYYY")}</span> <span className=' block    w-[0.5rem] h-[0.5rem] rounded-full bg-[white]'></span> <span className='capitalize'>{item?.contentType}</span> <span  className='w-[0.5rem] h-[0.5rem] rounded-full bg-[white]' ></span>
              <span className='block p-2 bg-[#82818194] rounded-lg'>UA+16</span></div>
              <p className='text-[#dcdada] mt-4'>{truncateParagraph(item.overview)}</p>
              <div className='flex mt-8 genrepara items-center gap-4 font-semibold'>{item.genres.map((item,index)=> index==0?<span>{item}</span>: <><span className='block h-[15px] w-[1px] bg-white'></span> <span>{item}</span>  </>
              )}</div>
              <div className='flex items-center btnpara mt-12 gap-3'> <NavLink to="/movieDetailPage" onClick={()=>dispatch(getCurrentMovie(item))}><button className='p-3 text-[1.1rem] px-20 hover:bg-[#7c7c7cca] hover:scale-[1.05] transition-all rounded-lg capitalize bg-[#6b6b6bc0]'
              >watch now</button></NavLink> 
              <div  className='cursor-pointer h-full  w-[3rem] flex justify-center items-center  text-[2rem] hover:bg-[#7c7c7cca] hover:scale-[1.09] transition-all  rounded-lg capitalize bg-[#6b6b6bc0]' onClick={()=>{dispatch(getWatchList(item))}}>+</div></div>
            </div> 
          </div> :""
          ))}
        </div>
        <div className="arrows">
          <button id="prev" onClick={() => showSlider((itemActive - 1 + countItem) % countItem)}>&lt;</button>
          <button id="next" onClick={() => showSlider((itemActive + 1) % countItem)}>&gt;</button>
        </div>
        <div className="thumbnail">
          {myCauroselData?.map((item, index) => (
            index>14 && index <20 ? <div className={`item pt-[1rem]  ${itemActive === index-15 ? 'active z-[100]' : ''}`} key={index} onClick={() => showSlider(index)}>
            <img src={item?.backdrop_path} alt="Name Slider" />
            
          </div> : ""
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainCarousel;

 
//  import React, { useEffect } from 'react';
//  import { useState } from 'react';
// import useFetch2 from '../../CustoumHooks/useFetch2';
// import { useDispatch, useSelector } from 'react-redux';
// import SearhResultPage from '../../uiComponents/SearhResultPage';
// import { getSearchQuery } from '../../App/AppSlice';
// import { fetchDataFromApi4 } from '../../utils/fetchData';
// import MovieImg1 from '../../uiComponents/MovieImg1';
// function SearchPage() {
//     const dispatch = useDispatch();
//     const {searchQuery} = useSelector(state=>state.AppSlice)
//     const [searchTerm, setSearchTerm] = useState('');
//   const [previousSearches, setPreviousSearches] = useState([]);
//   const [isFocused, setIsFocused] = useState(false);
//   const [searchResult, setSearchResult] = useState();
//   const [query ,setQuery] = useState("");
//   useEffect(()=>{
//     setQuery(searchQuery); 
//   },[searchQuery])
// //   const {data} = useFetch2("avenger endgame")
//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (searchTerm==='') return;
     
//     dispatch(getSearchQuery(searchTerm))
//     setPreviousSearches([searchTerm, ...previousSearches]);
    
//   };
 
// //   const {data} = useFetch2("batman");
// //   const handleOnClick = ( ) =>{
    
// //     setSearchResult(data);
// //     console.log(data);
// //     setSearchTerm("")
// //   }
 
//   return (
//      <div className='w-[1679px] max-w-[97%] mx-auto'>
//                <div className="max-w-lg mx-auto mt-10">
//       <form  className="flex gap-4 w-[140%] rounded-full overflow-hidden items-center mb-4  e">
//         <input
//           type="text"
//           value={searchTerm}
//           onChange={(e) =>{ setSearchTerm(e.target.value) 
           
//           }}
//           onFocus={() => setIsFocused(true)}
//           onBlur={() => setIsFocused(false)}
//           placeholder="Search..."
//           className="flex-1 px-4 py-4 border  rounded-full w-[60rem] searchbar outline-none bg-transparent block  focus:outline-none focus:ring-2 "
//         />
//         <button
//           type="submit"
//           onClick={handleSearch}
//           className="px-6 py-3 bg-[#2C2A97] text-white rounded-full hover:bg-[#2c2a97d4] focus:outline-none focus:ring-2 focus:ring-blue-500 text-[1.2rem]"
//         >
//           Search
//         </button>
//       </form>
//       {isFocused && previousSearches.length > 0 && (
//         <div className="absolute w-[36rem] top-[10%] left-0 right-0 bg-[#1b213a] translate-x-[7%] mx-auto p-1 rounded-xl shadow-md z-10">
          
//           <ul className="list-disc pl-2 space-y-1">
//             {previousSearches.map((search, index) => (
//               <li key={index} className='list-style:none rounded-xl p-2 hover:bg-[#0F1014]'>{search}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//      <div className='grid w-[1680px] max-w-[90%] mx-auto grid-cols-6'>
//         {query.length >0 ?  <SearhResultPage/> : ""}
//      </div>
//    </div>
      
//   )
// }

// export default SearchPage



import React, { useEffect, useState } from 'react';
import useFetch2 from '../../CustoumHooks/useFetch2';
import MovieImg1 from '../../uiComponents/MovieImg1';
import { NavLink } from 'react-router-dom';
const SearchPage = () => {
    const [query, setQuery] = useState('');
    const [secondQuery, setSecondQuery] = useState('')
    const [previousSearches, setPreviousSearches] = useState([]);
    const [isFocused, setIsFocused] = useState(false);
    const { data, loading, error } = useFetch2(secondQuery);

    const [myData,setMyData] = useState(data)
    useEffect(()=>{
      setMyData(data?.results)
      console.log(myData);
    },[data])
  
    const handleSearch = (e) => {
      e.preventDefault();
      if (!query) return;
      if (!previousSearches.includes(query)) {
        setPreviousSearches([...previousSearches, query]);
      }
      setIsFocused(false);
    };
  
    const handlePreviousSearchClick = (search) => {
      setQuery(search);
      setIsFocused(false);
    };

  return (
    <div className="min-h-screen bg-[#0F1014] p-4">
      <NavLink to="/" className="absolute myhomebtn">Home</NavLink>
    <div className=" mx-auto  pt-6 rounded ">
      <form onSubmit={handleSearch} className="flex mb-4 lg:w-[50%]  mx-auto relative gap-4">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setTimeout(() => setIsFocused(false), 200)}
          placeholder="Search..."
          className="flex-grow p-2  rounded-full pl-4  bg-[#1e1e4a] outline-none pagebar"
        />
        <button type="submit" className="p-2 px-4 bg-[#5452db] rounded-full text-white " onClick={()=>{setSecondQuery(query)}}>
          Search
        </button>
        
        {isFocused && previousSearches.length > 0 && (
          <div className="absolute top-full left-0 right-0 bg-[#181744]   rounded-xl mt-1  z-10">
            <div className="p-2">
             
              <div className="flex flex-col">
                {previousSearches.map((search, index) => (
                  <button
                    key={index}
                    onMouseDown={() => handlePreviousSearchClick(search)}
                    className="p-2 pl-4 m-1 text-[white] rounded-full block text-left hover:bg-[#262a66]"
                  >
                    {search}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}
      </form>

      <div className='xl:w-[91vw]  2xl:w-[1700px] 2xl:gap-4  xl:mx-auto sm:mx-auto lg:mx-auto md:mx-auto 2xl:mx-auto md:grid-cols-4 grid grid-cols-3  xl:grid-cols-6 lg:grid-cols-3 sm:grid-cols-4 mx-w-[94%] 2xl:grid-cols-8 gap-1'>
    { myData?.length>0 && secondQuery.length>0 ? myData?.map((item)=>
         item.poster_path?    <MovieImg1 item={item}/>: <div className='loading-skeleton w-[8rem] xl:w-[20rem] aspect-1'></div>
        ) : <h1 className='text-white text-[3rem] text-center'>No Movie found</h1>}
      </div>
 
    </div>
  </div>
  );
};

export default SearchPage;

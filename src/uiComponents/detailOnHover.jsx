import { motion } from "framer-motion";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getCurrentMovie, getWatchList } from "../App/AppSlice";
import { NavLink } from "react-router-dom";
function DetailOnHover({ img, about, date, style, genres, item }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const trunct = (str) => {
    if (str?.length <120) {
      return str;
    } else {
      return str?.slice(0, 120) + "...";
    }
  };
  return (
    <motion.div
      whileHover={{ scale:0.96, opacity: 1, translate: "" }}
      transition={{ duration: 0.3 ,delay: 0.5}}
      className={`w-[20rem]  detonh absolute  dpnone giveMeTrans overflow-hidden top-[-5%] rounded-lg   pb-2 scale-[0.9] opacity-[0] z-[3000]      bg-[#0b0b1a] left-[-18%] ${style}`}
    >
      <div className="w-[100%] h-[20vh]   bg-black">
        <img src={img} alt="" className="w-full h-full flex justify-start items-start rounded object-cover" />
      </div>
      <div className="overlay-detalis  w-full top-[52%] h-[4rem] absolute "></div>
      <div className="relative p-1 bg-[#0b0b1a] z-[200]">
        <div className="w-full  flex  mt-4 gap-3 bg-[#0b0b1a]">
         <NavLink to="/movieDetailPage" className="text-black font-semibold px-[2rem]  ml-1 text-[1rem] capitalize bg-[#fffffff3] smt hover:bg-[#cccccc] rounded-lg flex justify-center items-center" 
            onClick={() => {
              dispatch(getCurrentMovie(item))
            }}
          >
            {" "}
            <i className="ri-play-fill"></i>watch now{" "}
          </NavLink>{" "}
          <span onClick={()=>{dispatch(getWatchList(item))}} className=" cursor-pointer text-[white] py-1 font-semibold opacity-[1] bg-[#7474748e]  text-[1.6rem] smt  px-4 rounded-lg">
            +
          </span>
        </div>
      </div>
      {/* <div className="text-[white] items-center pl-3 flex gap-3">{item?.genres.map((item,index)=> index==0 ? <span className="text-nowrap">{item}</span> : <>  <span className="w-[0.5rem] h-[0.5rem] block bg-white rounded-full"></span><span>{item}</span></>)}</div> */}
      
      <div className="movie-detail-overview text-[#e1dfdf] pl-3 mt-1 text-sm w-full bg-[#0b0b1a]">
        <p className="w-full text-[#a4a3a3] bg-[#0b0b1a] text-sm">{trunct(about)}</p>
      </div>
    </motion.div>
  );
}

export default DetailOnHover;

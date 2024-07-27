import React from 'react'
import c1 from "../assets/c1.png"
import c2 from "../assets/c2.png"
import c3 from "../assets/c3.png"
import c4 from "../assets/c4.png"
import c5 from "../assets/c5.png"
import { NavLink } from 'react-router-dom'

function CategoryContainer() {
    let categoryArray = [{img:c1,video:"https://img10.hotstar.com/video/upload/sources/r1/cms/animations/qh3yh_1587393133132",path:"disneyPage"}
        ,{
            img:c2,video:"https://img10.hotstar.com/video/upload/sources/r1/cms/animations/a6lr0r_1587393331483",path:""
        }
        ,
        {
            img:c3,video:"https://img10.hotstar.com/video/upload/sources/r1/cms/animations/1on5cf_1587393232549",path:"marvelPage"
        },
        {
            img:c4,video:"https://img10.hotstar.com/video/upload/sources/r1/cms/animations/utwmfd_1587393376512",path:"starWar"
        },
        {
            img:c5,video:"https://img10.hotstar.com/video/upload/sources/r1/cms/animations/ojerhm_1587393280208",path:""
        }

    ]
  return (
    <div className='w-[1570px] max-w-[90%] mx-auto my-20 m   grid grid-cols-5 categorygrid gap-2'>
           {categoryArray.map((item)=>
            <NavLink to={`/${item.path}`}>
                <div className=' relative gmt   t  rounded-lg overflow-hidden'>
             <img src={item.img} alt="" className='absolute   '/>
             <video src={item.video} 
      autoPlay
      loop
      muted></video>
           </div>
            </NavLink>
        )}
    </div>
  )
}

export default CategoryContainer
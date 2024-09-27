import React, { useEffect, useState } from "react"; 
import img3 from "./images/royal_enfield_wingman.avif"
import img2 from "./images/service_cost_calculator.avif"
import img1 from "./images/motoverse_2024_420x475.webp"
import img4 from "./images/made_in_madras.avif"
import img5 from "./images/manang-mobile-app.jpg"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Mslides=()=>{
    const [slider,setSlider]=useState(0)
    const data=[img1,img2,img3,img4,img5]

  
    const leftbtn=()=>{
        setSlider(slider===data.length-1?0 : slider+1)
     
    }
    const rightbtn=()=>{
        setSlider(slider===0 ?data.length-1 : slider-1)
    }
   
    return(
        <>
   

   {

     data.map((img,index)=>(
        <div className={`mslides ${slider===index? "block":"hidden"}` }key={index}>
        <img src={img} className='slide' alt=''/>
    <button id="leftbtn" onClick={leftbtn}>
        <ArrowBackIosNewIcon/>
    </button>
    <button id='rightbtn' onClick={rightbtn}>
      <ArrowForwardIosIcon/>
    </button>
    <button id="know">Know More </button>
    </div>
     ))
   }
    
    
    </>
    )
}
export default Mslides;
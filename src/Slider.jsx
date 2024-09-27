import React, { useEffect, useState } from "react"; 
import img3 from "./images/gma-landing-home-new.avif"
import img2 from "./images/leh-rider-support.avif"
import img1 from "./images/royal-enfield-x-alpinestar (1).jpg"
import img4 from "./images/apparel.avif"
import img5 from "./images/dealers-home-new.avif"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Slider=()=>{
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
        <div className={`slides ${slider===index? "block":"hidden"}` }key={index}>
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
export default Slider;
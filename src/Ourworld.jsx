import React, { useState } from "react";
import wrldimg1 from "./images/top-banner-home-desc1.jpg"
import wrldimg2 from "./images/new-banner-home.jpg"
import wrldimg3 from "./images/classic-scale-model1.avif"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Key } from "@mui/icons-material";

const Ourworld=()=>{
   const [wimg ,setWImg]=useState(0)
   const Wdata=[wrldimg1,wrldimg2,wrldimg3]
  
    const leftbtn=()=>{
        setWImg(wimg===Wdata.length-1 ?0 :wimg+1)
        
    }
    const rightbtn=()=>{
        setWImg(wimg===0?Wdata.length-1 :wimg-1)
    }
    return(
        <>
        <div className="worldPage">
        <div className="worldnav">Our World</div>
        <div className="worldbanner">
{
     Wdata.map((img,index)=>(
        <div className={`slides ${wimg===index? "block":"hidden"}`}Key={index}>
        <img src={img} alt="" />
      <button id="leftbtn" onClick={leftbtn}>
        <ArrowBackIosNewIcon/>
    </button>
    <button id='rightbtn' onClick={rightbtn}>
      <ArrowForwardIosIcon/>
    </button>
    </div>
     ))
    
}  
  </div>
     
        </div>
        <div className="worldSPage">
        <div className="wcParent">
            <div className="wchild wchild1">
                <div className="wName">
                <h3>Art of Motorcycling</h3>
                <button className="wexplore">Know More</button>
                </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild2">
            <div className="wName">
                <h3>Reown</h3>
                <button className="wexplore">Know More</button>
            </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild3">
            <div className="wName">
            <h3>Made In Madras</h3>
            <button className="wexplore">Know More</button>
            </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild4">
            <div className="wName">
            <h3>Custom World</h3>
            <button className="wexplore">Know More</button>
            </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild5">
            <div className="wName">
            <h3>Wallpapers</h3>
            <button className="wexplore">Know More</button>
            </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild6">
            <div className="wName">
            <h3>News and Media</h3>
            <button className="wexplore">Know More</button>
            </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild7">
            <div className="wName">
            <h3>Since 1901</h3>
            <button className="wexplore">Know More</button>
            </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild8">
            <div className="wName">
            <h3>Garage Cafe</h3>
            <button className="wexplore">Know More</button>
            </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild9">
            <div className="wName">
            <h3>Campaigns</h3>
            <button className="wexplore">Know More</button>
            </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild10">
            <div className="wName">
            <h3>Careers</h3>
            <button className="wexplore">Know More</button>
            </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild11">
            <div className="wName">
            <h3>Gallery</h3>
            <button className="wexplore">Know More</button>
            </div>
            </div>
        </div>
        <div className="wcParent">
            <div className="wchild wchild12"></div>
        </div>
        </div>
      
         
        </>
    )
}
export default Ourworld;
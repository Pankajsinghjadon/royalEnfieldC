import React, { useState } from "react";
import Simg1 from "./images/apparel-home1.avif";
import Simg2 from "./images/apparal-instagram-desktop.avif";
import Simg3 from "./images/miy-riding-jacket.avif";
import Simg4 from "./images/miy-helmet-tshirts.png";
import Simg5 from "./images/top-banner-home-desc1.jpg";
import Simg6 from "./images/apparal-instagram-desktop.avif";
import Simg7 from "./images/royal-enfield-x-alpinestar.jpg";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Slider } from "@mui/material";
import { Key } from "@mui/icons-material";

const Shop=()=>{

    const [myimg,SetSimg]=useState(0);
    const sdata=[Simg1,Simg2,Simg3,Simg4,Simg5,Simg6,Simg7]

    const leftbtn=()=>{
          SetSimg(myimg===sdata.length-1?0 : myimg+1);
    }

    const rightbtn=()=>{
          SetSimg(myimg===0 ?sdata.length-1: myimg-1)
    }
   return(
    <>
    
         <div className="shop">
         <div className="shopNav">
           <h3> 
           Apparel & Merchandise</h3>
         </div>
         {
            sdata.map((img,index)=>(
                <div className={`slides ${myimg===index?"block":"hidden"}`}Key={index}>
                <img src={img} alt="" className="shopPhoto" />
                <button id="leftbtn" onClick={leftbtn}>
        <ArrowBackIosNewIcon/>
    </button>
    <button id='rightbtn' onClick={rightbtn}>
      <ArrowForwardIosIcon/>
    </button>
    </div>
            ))
         }
          
         <div className="shopNav2">
           <h3> 
           Collections</h3>
         </div>

       
         <div className="mycollection">
          <div className="mcbox mcbox1">
              <h2>Gloves</h2>
              <button className="mcbtn">Shop Now</button>
          </div>
          <div className="mcbox mcbox2">
          <h2>Helmets</h2>
          <button className="mcbtn">Shop Now</button>
          </div>
          <div className="mcbox mcbox3">
          <h2>Boots</h2>
          <button className="mcbtn">Shop Now</button>
          </div>
          <div className="mcbox mcbox4">
          <h2>Jackets</h2>
          <button className="mcbtn">Shop Now</button>
          </div>
          <div className="mcbox mcbox5">
          <h2>Gloves</h2>
          <button className="mcbtn">Shop Now</button>
          </div>
          <div className="mcbox mcbox6">
          <h2>Gloves</h2>
          <button className="mcbtn mcbtn6" >Shop Now</button>
          </div>
          <div className="mcbox mcbox7">
          <h2>Gloves</h2>
          <button className="mcbtn">Shop Now</button>
          </div>
          <div className="mcbox mcbox8">
          <h2>Gloves</h2>
          <button className="mcbtn">Shop Now</button>
          </div>
          <div className="mcbox mcbox9">
          <h2>Gloves</h2>
          <button className="mcbtn mcbtn9">Shop Now</button>
          </div>

        
          </div>

          <div className="myScollections">
            <div className="sparent">
                <div className="schild schild1">
                    <h3>Belts</h3>
                </div>
            </div>
            <div className="sparent">
                <div className="schild schild2">
                <h3>Headgear</h3>
                </div>
            </div>
            <div className="sparent">
                <div className="schild schild3">
                <h3>Motorcycles Print t-shirt</h3>
                </div>
            </div>
            <div className="sparent">
                <div className="schild schild4">
                <h3>Wallets</h3>
                </div>
            </div>
          </div>
      
         </div>
        </>
    )
}
export default Shop;
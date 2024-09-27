import React, { useState } from "react";
import rideimg1 from  "./images/Rides/uncover-north-east-desktop.jpg"
import rideimg2 from  "./images/Rides/1920x750.jpg"
import rideimg3 from  "./images/Rides/royal-enfield-trail-school-2024.png"
import rideimg4 from  "./images/Rides/himalayan-adventure-tibet-2024-new.avif"
import rideimg5 from  "./images/Rides/himalayan-manang-2024-closed.jpg"
import rideimg6 from  "./images/Rides/gt-cup-desktop.jpg"
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Key } from "@mui/icons-material";


const Ride=()=>{
    const [rideimg,setRImg]=useState(0);
    const Rdata=[rideimg1,rideimg2,rideimg3,rideimg4,rideimg5,rideimg6]

    const Rleftbtn=()=>{
        setRImg(rideimg===Rdata.length-1?0 :rideimg+1);
    }
    const Rrightbtn=()=>{
       setRImg(rideimg===0 ?Rdata.length-1 :rideimg-1)
    }
    return(
        <>
        <div className="rideNav">
        <h3> 
        Motorcycle Rides Calendar</h3>

        </div>
        <div className="rideFPage">
           <div className="upperdiv">
       {
        Rdata.map((Rimg,index)=>(
            <div className={`rslide ${rideimg===index? "block":"hidden"}`}Key={index}>
            
           <img src={Rimg} alt="" className="ridePhotho"/>
           <button id="Rleftbtn" onClick={Rleftbtn}>
        <ArrowBackIosNewIcon/>
    </button>
    <button id='Rrightbtn' onClick={Rrightbtn}>
      <ArrowForwardIosIcon/>
    </button>
    </div>
        ))

       }
           
           </div>
           <div className="threeDiv">
            <div className="ridesTdiv ridesTdiv1">
                <div className="Rtext">
                    <h4>Unlocking your explorer mindset, rides from Royal Enfield giving you a taste of true blue adventures from around the world are now within reach. Join now!</h4>
                </div>
            </div>
            <div className="ridesTdiv ridesTdiv2">
            <div className="Rtext">
                    <h4>Rich experiences that drive pure motorcycling to its zenith, making you a seeker of stories for times to come. Sign up for discovery on a Royal Enfield!</h4>
                </div>
            </div>
            <div className="ridesTdiv ridesTdiv3">
            <div className="Rtext">
                    <h4>Get Adventure ready as the Trail School levels you up enabling you to take on those backyard trails with ease. Start your adventures here!</h4>
                </div>
            </div>
           </div>
        </div>
         <div className="RsecondPage">
            <h1>Rides</h1>
            <div className="secondpagegrid">
            <div className="secGimg secGgrid1">
                <h1>Adventure</h1>
            </div>
            <div className="secGimg secGgrid2">
                <div className="bio">
                    <h4>Himalayan Adventure Everest Base Camp</h4>
                    <h5>29th sept -29th oct 2024</h5>
                <p> RIDE CANCELLED</p>
                </div>
            </div>
            <div className="secGimg secGgrid3">
            <div className="bio">
                    <h4>Himalyan odyssey 2024</h4>
                    <h5>03rd Aug -20th Aug 2024</h5>
                <p> 18 Days</p>
                </div>
            </div>
            <div className="secGimg secGgrid4">
            <div className="bio">
                    <h4>Himalayan Adventure Changthang 2024</h4>
                    <h5>31st Aug -08th Sept 2024</h5>
                <p> 08 Days</p>
                </div>
            </div>
            <div className="secGimg secGgrid5">
            <div className="bio">
                    <h4>Moto Himalaya Zanskar 2024</h4>
                    <h5>Batch 1: 10th to 18th Aug 2024</h5>
                
                </div>
            </div>
            <div className="secGimg secGgrid6">
            <div className="bio">
                    <h4>Moto Himalayan Changthang 2024</h4>
                    <h5>Batch 1: 10th to 18th Aug 2024</h5>
                <h5> Batch 2: 17th to 25th Aug 2024</h5>
                </div>
            </div>
            <div className="secGimg secGgrid7">
            <div className="bio">
                    <h4>Himalayan Adventure Tibet 2024</h4>
                    <h5>12th May -24th May 2024</h5>
                <p> RIDE COMPLETED</p>
                </div>
            </div>
            <div className="secGimg secGgrid8">
            <div className="bio">
                    <h4>Himalayan Adventure Manang 2024</h4>
                    <h5>20th April -28th April 2024</h5>
                <p> RIDE COMPLETED</p>
                </div>
            </div>
            <div className="secGimg secGgrid9">
            <div className="bio">
                    <h4>Moto Himalayan Mustang 2024</h4>
                    <h5>14th Sept - 25th Sept 2024</h5>
                <h5>12Days</h5>
                </div>
            </div>

            </div>`
            
            <div className="myRideSgrid">
                <div className="MrIMG MrIMG1">
                <div className="bio">
                    <h4>Uncover North East 2024</h4>
                    <h5>24th Sept - 01st Oct 2024</h5>
                <h5>8Days</h5>
                </div>
                </div>
                <div className="MrIMG MrIMG2">
                <div className="bio">
                    <h4>One Ride 2024</h4>
                    <h5>22nd Sept 2024</h5>
                <h5>01 Days</h5>
                </div>
                </div>
                <div className="MrIMG MrIMG3">
                <h1>Discovery</h1>
                </div>
                <div className="MrIMG MrIMG4">
                    <h1>Training</h1>
                </div>
                <div className="MrIMG MrIMG5">
                    <h3>Royal Enfield Trail School</h3>
                </div>
            </div>
         </div>
         <div className="RthirdPage">
         <h1>Gallery</h1>
         <h2>Stay Updated</h2>
         <div className="thirdgridR">
            <div className="Tgrid Tgrid1">1</div>
            <div className="Tgrid Tgrid2">2</div>
            <div className="Tgrid Tgrid3">3</div>
            <div className="Tgrid Tgrid4">4</div>
            <div className="Tgrid Tgrid5">5</div>
            <div className="Tgrid Tgrid6">6</div>
            <div className="Tgrid Tgrid7">7</div>
         </div>

         </div>
        </>
    )
}
export default Ride;
import React from 'react'

import video1 from "./images/guerrilla-450-home.mp4";
import video2 from "./images/guerrilla_450_home.mp4";
import Slider from './Slider';
import Secondnav from './Secondnav';
import Navbar3 from "./Navbar3"
import Footer from './Footer';
import Mslides from './Mslides';
import Mphoto_dump from './Mphoto_dump';


const Heropage=()=> {
  

  return(
    <>
  <div className='hero_page'>
  
 
  <div className='myvideo'  >
  <div className='explore_btn'>
    <h1>Guerrilla 450</h1>
    <button >Explore</button>
  </div>
  <video  autoPlay loop muted  id='firstV' >
    <source src={video1} type='video/mp4' />
   </video>
   <video  autoPlay loop muted  id='secondV' >
    <source src={video2} type='video/mp4' />
   </video>
  </div>  
  <div className='secondPage'>
    <Slider/>
    <Mslides/>
   <div className='newsbar'>
    <h1>News and Media</h1>
   </div>
  </div>
  {/* $$$$$$$$$$ third page %%%%%%%%%  */}
  <div className='third_page'>
  <Mphoto_dump/>
   <div className='photho_dump'>
    <div className='child pimg1'>
    <h3>The All New Royal Enfield Himalayan</h3>

    </div>
   </div>
   <div className='photho_dump'>
    <div className='child pimg2'>
    <h3>2023 Royal Enfield Himalayan Review</h3>
      
    </div>
   </div>
   <div className='photho_dump'>
    <div className='child pimg3'>
    <h3>Royal Enfield Himalayan450</h3>
      
    </div>
   </div>
   <div className='photho_dump'>
    <div className='child pimg4'>
    <h3>Royal Enfield Himalayan450:First Ride</h3>
      
    </div>
   </div>
   
   
   <div className='secondNavbar'>
   <Secondnav/>
   </div>
    <div className='claasicimg'>
   <button >Explore</button>
   
   </div> 
   </div>

   {/* ################# Fourth PAge ##############  */}

    <div className='fourth_page'>
   <div className='thirdnav'>
   <Navbar3/>
   </div>
   <div className='myimg4'>
   <button className='poster'>Download now</button>
    
   </div>
   
  
   
   </div> 
  </div>
  
    </>
  )
  
};

export default Heropage;

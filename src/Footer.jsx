import React, { useState } from "react";
import fb from "./images/facebook-svgrepo-com.svg";
import youtube from "./images/youtube-168-svgrepo-com.svg"
import twiter from "./images/twitter-svgrepo-com.svg"
import insta from "./images/instagram-rounded-svgrepo-com.svg"
import redit from "./images/reddit-svgrepo-com.svg"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
const Footer=()=>{
 
  
    return(
        <>
        <div className='service'>
    <div className='container tap'>
      <h3>Book a Test Ride</h3>
    </div>
    <div className='container map'>
      <h3>Find a Store</h3>
    </div>
    <div className='container gear'>
      <h3>Book a service</h3>
    </div>
    <div className='container Ridebike'>
      <h3>Ride our Bike</h3>
    </div>
   </div>
       <div className="myFooter">
       <div className="socialhandels">
       <div className="Fcontent">
        <h3>Join the conversation </h3>
        <ul>
            <li>
              <img src={fb} alt=""/>
            </li>
            <li>
              <img src={insta} alt=""/>
            </li>
            <li>
              <img src={youtube} alt=""/>
            </li>
            <li>
              <img src={twiter} alt=""/>
            </li>
            <li>
              <img src={redit} alt=""/>
            </li>
            
           
        </ul>
       </div>

       </div>
       <div className="fborder"></div>
       <div className='flists'>
   <div className='list list1'>
    <h2>Motorcycles</h2>
    <ul>
      <li>Guerrilla 450</li>
      <li>Shotgun 650</li>
      <li>New Himalayan</li>
      <li>Bullet 350</li>
      <li>Super Meteor 650</li>
      <li>Hunter 350</li>
      <li>Scram 411</li>
      <li>Classic 350</li>
      <li>Meteor 350</li>
      <li>Continental GT</li>
    </ul>
   </div>
   <div className='list list2'>
   <h2>Rides & Events</h2>
   <ul>
    <li>Rides</li>
    <li>Rentals</li>
    <li>Tours</li>
   
   </ul>

   </div>
   <div className='list list3'>
   <h2>Support</h2>
   <ul>
    <li>Service Centres</li>
    <li>Stores</li>
    <li>Owner's Manual</li>
    <li>Contact Us</li>
    <li>Book a Test Ride</li>
    <li>Make It Yours</li>
    <li>Become a Dealer</li>
   </ul>
  
   </div>
   <div className='list list4'>
    <h2> About Us</h2>
    <ul>
      <li>Since 1901</li>
      <li>About Eicher Motors</li>
    </ul>

   </div>
   <div className='list list5'>
    <h2> News & Media</h2>
    <ul>
      <li>Press Releases</li>
      <li>Media Kit</li>
      <li>Events</li>
    </ul>
   </div>
   <div className='list list6'>
   <h2> Our World</h2>
    <ul>
      <li>Royal Enfield TV</li>
      <li>Royal Enfield App</li>
      <li>Royal Enfield Tripper</li>
      <li>Royal Enfield Wingman</li>
      <li>Royal Enfield Tripper Dash</li>
      <li>Reown</li>
      <li>Goa Garage Cafe</li>
      <li>Custom World</li>
      <li>Since 1901</li>
      <li>Made In Madras</li>
    </ul>
    </div>
   </div>
{/*    
   <div className='Mlists'>
   <div className='Mlist Mlist1'>
   <h1>Motorcycles</h1>
   <button onClick={BCbtn} className="MButton"><ExpandMoreIcon/></button>
   {show &&
   <div className="mContent">
    <ul  >
      <li>Guerrilla 450</li>
      <li>Shotgun 650</li>
      <li>New Himalayan</li>
      <li>Bullet 350</li>
      <li>Super Meteor 650</li>
      <li>Hunter 350</li>
      <li>Scram 411</li>
      <li>Classic 350</li>
      <li>Meteor 350</li>
      <li>Continental GT</li>
    </ul>
    </div>
   }
   </div>
    */}
    <div className="mList">
      <ul>
        <li><ExpandMoreIcon className="mbtn"/>Motorcycles</li>
        <li><ExpandMoreIcon className="mbtn"/>Rides & Events</li>
        <li><ExpandMoreIcon className="mbtn"/>Support</li>
        <li><ExpandMoreIcon className="mbtn"/>News & Media</li>
        <li><ExpandMoreIcon className="mbtn"/>About Us</li>
        <li><ExpandMoreIcon className="mbtn"/>Vaccancy</li>
        <li><ExpandMoreIcon className="mbtn"/>Contact Us</li>
        <li><ExpandMoreIcon className="mbtn"/>Service</li>
      </ul>
     </div>
       </div> 
  
  
   
   <div className="Efooter">
     <h5 id="first">© 2024. Royal Enfield. | *T&C apply. Images shown here may differ from the actual product.</h5>
     <h5  id="second">Private Import PolicyPrivacyTerms & ConditionsCookiesSitemap</h5>
   </div>
       
        </>
    )
}
export default Footer;

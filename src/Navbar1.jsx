import React, { useState } from 'react';
import Rlogo from "./images/logo.svg";
import chevron from "./images/chevron-down-outline.svg";
import { NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ClearIcon from '@mui/icons-material/Clear';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Navbar1=()=> {
  
 
 const sidebar=()=>{
  const sideIcon=document.querySelector('.sideIcon')
  sideIcon.style.display="block"
  const sideicon=document.querySelector('.sideicon')
    sideicon.style.display="none"
    const closeB=document.querySelector('.closeB')
   closeB.style.display="block"
  }
  
const closebar=()=>{
  const sideIcon=document.querySelector('.sideIcon')
  sideIcon.style.display="none"
  const sideicon=document.querySelector('.sideicon')
    sideicon.style.display="block"
   const closeB=document.querySelector('.closeB')
   closeB.style.display="none"

}
  
  return(
    <>
  <nav className='mynav' id='mynav'>
    <div id='logo'>
    <NavLink to="/" >
    <img src={Rlogo} alt=''/>
    </NavLink>
    </div>
    <div className='profile'>
     <button className='profile'><AccountCircleIcon/></button>
    </div>
    <nav >
        <ul >
            <li><NavLink exact to='/Motorcycles'>Motorcycles</NavLink></li>
            <li><NavLink exact to="/Shop">Shop <img src={chevron} id="shop"/>
            <div className="dropdown">

  <ul >
    <li><a className="dropdown-item" href="#">Accessereios</a></li>
    <li><a className="dropdown-item" href="#">Apreal</a></li>

  </ul>
</div>
            </NavLink></li>
            <li><NavLink exact to="/Service">Service  <img src={chevron} id="shop"/>
            <div className="dropdown">

<ul >
  <li><a className="dropdown-item" href="#">OverView</a></li>
  <li><a className="dropdown-item" href="#">Service Cost Calc</a></li>
  <li><a className="dropdown-item" href="#">Book Ride</a></li>
  <li><a className="dropdown-item" href="#">Service History</a></li>

</ul>
</div>
        </NavLink> </li>
          
          <li><NavLink exact to="/Ride">Rides <img src={chevron} id="shop"/>
          <div className="dropdown">

<ul >
  <li><a className="dropdown-item" href="#">Rides End Events</a></li>
  <li><a className="dropdown-item" href="#">Rentals</a></li>
  <li><a className="dropdown-item" href="#">Tours</a></li>


</ul>
</div>
          </NavLink></li>
          <li><NavLink exact to="/ourworld">Our World <img src={chevron} id="shop"/>
            <div className="dropdown">

<ul >
  <li><a className="dropdown-item" href="#">OverView</a></li>
  <li><a className="dropdown-item" href="#">Custom World</a></li>
  <li><a className="dropdown-item" href="#">Royal Enfield App</a></li>
 

</ul>
</div>
          
          </NavLink></li>
          <li><NavLink exact to="/Support">Support</NavLink></li>
          <li><NavLink exact to="/LocateUs">Locate us</NavLink></li>
      </ul>
  </nav>
       
    <div className='clientside'>
        <ul>
        <li><NavLink exact to="/Login">Log In</NavLink></li>
            <li>
                <input type='search' placeholder='search Here' id='search'/>
            </li>
            
        </ul>
        </div>

 {/* GGGGGGGGGGGGGGGG  */}
 
       <div className='sideIcon'>
      
       
        <ul >
        
            <li><NavLink exact to='/Motorcycles'>Motorcycles</NavLink></li>
            <li><NavLink exact to="/Shop">Shop <img src={chevron} id="shop"/>
            <div className="dropdown">

  <ul >
    <li><a className="dropdown-item" href="#">Accessereios</a></li>
    <li><a className="dropdown-item" href="#">Apreal</a></li>

  </ul>
</div>
            </NavLink></li>
            <li><NavLink exact to="/Service">Service  <img src={chevron} id="shop"/>
            <div className="dropdown">

<ul >
  <li><a className="dropdown-item" href="#">OverView</a></li>
  <li><a className="dropdown-item" href="#">Service Cost Calc</a></li>
  <li><a className="dropdown-item" href="#">Book Ride</a></li>
  <li><a className="dropdown-item" href="#">Service History</a></li>

</ul>
</div>
        </NavLink> </li>
          
          <li><NavLink exact to="/Ride">Rides <img src={chevron} id="shop"/>
          <div className="dropdown">

<ul >
  <li><a className="dropdown-item" href="#">Rides End Events</a></li>
  <li><a className="dropdown-item" href="#">Rentals</a></li>
  <li><a className="dropdown-item" href="#">Tours</a></li>


</ul>
</div>
          </NavLink></li>
          <li><NavLink exact to="/ourworld">Our World <img src={chevron} id="shop"/>
            <div className="dropdown">

<ul >
  <li><a className="dropdown-item" href="#">OverView</a></li>
  <li><a className="dropdown-item" href="#">Custom World</a></li>
  <li><a className="dropdown-item" href="#">Royal Enfield App</a></li>
 

</ul>
</div>
          
          </NavLink></li>
          <li><NavLink exact to="/Support">Support</NavLink></li>
          <li><NavLink exact to="/LocateUs">Locate us</NavLink></li>
          </ul>
          
          </div> 
          <button onClick={sidebar} className='sideicon' ><MenuIcon/></button>
          <button onClick={closebar} className='closeB'><ClearIcon/></button>
  </nav>
 
  
   
 
    </>
  )
  
};

export default Navbar1

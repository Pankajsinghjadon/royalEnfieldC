import React from "react";
import Glogo from "./images/logo.svg";

const secondnav=()=>{
  
 return(
    <>
    <nav id="mynav2">
      <div className="mynav2" >
      
      <div className='logo1'>
    <img src={Glogo} alt=''/>
    </div>

    <div className="bikeDetailes">
      <ul id="menu">
         <li>
         <li><a href='#'>Guerrilla 450 </a></li>
         <h3>|</h3>
         <li><a href='#'>Shotgun 650  </a></li>
         <h3>|</h3>
         <li><a href='#'>New Himalayan </a></li>
         <h3>|</h3>
         <li><a href='#'>Bullet 350 </a></li>
         <h3>|</h3>
         <li><a href='#'>Continental GT </a></li>
         <h3>|</h3>
         <li><a href='#'>Hunter 350 </a></li>
         <h3>|</h3>
         <li><a href='#'>Classic 350 </a></li>
         <h3>|</h3>
         <li><a href='#'>Super Meteor 650 </a></li>
         <h3>|</h3>
         <li><a href='#'>Scram 411 </a></li>
         <h3>|</h3>
         <li><a href='#'>Meteor 350  </a></li>
         </li>
      </ul>
      <ul id="Mmenu">
         <li>
         <li><a href='#'>Guerrilla 450 </a></li>
         <h3>|</h3>
         <li><a href='#'>Shotgun 650  </a></li>
         <h3>|</h3>
         <li><a href='#'>New Himalayan </a></li>
         <h3>|</h3>
         <li><a href='#'>Bullet 350 </a></li>
         <h3>|</h3>
         <li><a href='#'>Continental GT </a></li>
         <h3>|</h3>
         <li><a href='#'>Hunter 350 </a></li>
        
         </li>
      </ul>
     
    </div>
    
      </div>
      </nav>
    </>
 )

}
export default secondnav;
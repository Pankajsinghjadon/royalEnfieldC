import React from "react";
import Glogo from "./images/logo.svg";

const Navbar3=()=>{
  
 return(
    <>
    <nav id="mynav3">
      <div className="mynav3" >
      
      <div className='logo1'>
    <img src={Glogo} alt=''/>
    </div>

    <div className="bikedetailes">
      <ul id="menu">
         <li>
         <li><a href='#'>Motoverse 2024 </a></li>
         <h3>|</h3>
         <li><a href='#'>RE:Mapped  </a></li>
         <h3>|</h3>
         <li><a href='#'>GT Cup </a></li>
         <h3>|</h3>
         <li><a href='#'>Rentals </a></li>
         <h3>|</h3>
         <li><a href='#'>Tours </a></li>
         <h3>|</h3>
         <li><a href='#'>Track School</a></li>
         <h3>|</h3>
         <li><a href='#'>Leh Rider Support </a></li>
         
         </li>
         
      </ul>
      <ul id="menu3">
         <li>
         <li><a href='#'>Motoverse 2024 </a></li>
         <h3>|</h3>
         <li><a href='#'>Tours  </a></li>
         <h3>|</h3>
         <li><a href='#'>GT Cup </a></li>
         <h3>|</h3>
         <li><a href='#'>Rentals </a></li>
         <h3>|</h3>
         <li><a href='#'>RE:Mapped  </a></li>
         <h3>|</h3>
         <li><a href='#'>Track School</a></li>
         
         
         </li>
         
      </ul>
    </div>
    
      </div>
      </nav>
    </>
 )

}
export default Navbar3;
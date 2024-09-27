import React from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Support=()=>{

    const accordion=document.querySelectorAll(".accordion");

    accordion.forEach(accordion=>{
      const icon=accordion.querySelectorAll('.icon');
      const Answere=accordion.querySelectorAll('.Answere');

       accordion.addEventListener('click',()=>{
        accordion.classList.toggle("active");
        icon.classList.toggle("active");
        Answere.classList.toggle("active");
        

       })
       
    })
    return(
        <>
        <div className="supportPage">
            <div className="supportgrid">
                <div className="supportbox supportbox1">
                <div className="supcontent">
                    <h3>Contact Us</h3>
                 
               <h4>For Roadside Assistance(RSA)-1800 210 0007(24x7) For Custumer Support-1800 210 0008(09:00A.M to 09:00PM)</h4>
               <button className="suprtbtn">Know More</button>
                </div>
                    
                </div>
                <div className="supportbox supportbox2">
                <div className="supcontent">
                    <h3>Write to Us</h3>
                 
               <h4>Email your Query,feedback or suggestion to support@royalenfield.com</h4>
               <button className="suprtbtn">Know More</button>
                </div>
                </div>
                <div className="supportbox supportbox3">
                <div className="supcontent">
                    <h3>FAQs</h3>
                 
               <h4>Get Answer to the most commonly asked question</h4>
               <button className="suprtbtn">Know More</button>
                </div>
                </div>
                <div className="supportbox supportbox4">
                <div className="supcontent">
                    <h3>Road Side Assistance</h3>
                 
               <h4>Find details about the emergency roadside assistence programme</h4>
               <button className="suprtbtn">Know More</button>
                </div>
                </div>
            </div>
            </div>
            <div className="secondgrid">
                <div className="mySgrid">
                
                    <div className="Scontentsecond Scontentsecond1 ">
                        <h2>Owner's Manual</h2>
                        <h5>Know your motorcycle inside-out. Download your own manual.</h5>
                        <button className="sgridbtn">Select Your Motorcycle</button>
                    </div>
                </div>
                <div className="mySgrid">
                    <div className="Scontentsecond Scontentsecond2 ">
                    <h2>Quick Start Guide</h2>
                    <button className="sgridbtn">Explore</button>
                    </div>
                </div>
                <div className="mySgrid">
                    <div className="Scontentsecond Scontentsecond3 ">
                    <h2>Borderless Warranty</h2>
                        <h5>Introducing the Royal Enfield Borderless Warranty, which spans 3000+ service stations in 70+ countries around the world.</h5>
                        <button className="sgridbtn">Know More</button>
                    </div>
                </div>
            </div>
            <div className="supNav">
                <h2>Frequently Asked Questions</h2>
            </div>
        <div className="querries">
            <div className="leftPart">
                <h2>Categories</h2>
                <p>Pick a Category</p>
                <div className="catName">
                    <div className="myCatg myCat1">
                        <h3>Motorcycle </h3>
                        <div className="border">
                        </div>
                    </div>
                    <div className="myCatg myCat2">
                        <h3>Saftey </h3>
                        <div className="border">
                        </div>
                    </div>
                    <div className="myCatg myCat3">
                        <h3>Customer Service</h3>
                        <div className="border">
                        </div>
                    </div>
                    <div className="myCatg myCat4">
                        <h3>General </h3>
                        <div className="border">
                        </div>
                    </div>
                </div>
            </div>
            <div className="rightPart">
            <h1>Motorcycles</h1>
              <div className="accordion">
                <div className="question">
                   <h2>Which Royal Enfield motorcycle is perfect for me?</h2>
                   <ArrowDropDownIcon className="icon"/>
                </div>
                <div className="Answere ">
                <p>Our motorcycles differ in many ways as each offers a different experience, while providing the signature Royal Enfield riding pleasure. You can explore our range, book a test ride and select the motorcycle that’s best for you by walking in to a Royal Enfield store near you.</p>
              </div>
              </div>
              <div className="accordion">
                <div className="question">
                   <h2>Where can I buy a Royal Enfield motorcycle from?</h2>
                   <ArrowDropDownIcon className="icon " />
                </div>
                
                <div className="Answere ">
                <p>Across the world, we have stores in over 50 countries. They are well equipped to provide you support and guidance to ride a Royal Enfield motorcycle of your choice. All you need to do is walk in to a Royal Enfield store near you.</p>
              </div>
              </div>
              <div className="accordion">
                <div className="question">
                   <h2>What is the frame number of my motorcycle?</h2>
                   <ArrowDropDownIcon className="icon"/>
                </div>
               
                <div className="Answere">
                <p>The frame number of your Royal Enfield motorcycle is punched on the steering head on the right side.</p>
              </div>
              </div>
              <div className="accordion">
                <div className="question">
                   <h2>What is the engine number of my motorcycle?</h2>
                   <ArrowDropDownIcon className="icon"/>
                </div>
                <div className="Answere">
                <p>The engine number of your Royal Enfield motorcycle is punched on the left side of the crank case.</p>
              </div>
              </div>

            </div>
        
            </div>
        </>
    )
}
export default Support;
import React from "react";


const Service=()=>{
    return(
        <>
        <div className="SerFpage">
            <div className="serfParent">
                <div className=" serFChild serFChild1">
                    <div className="serWrite">
                        <div className="sWritten">
                       <h3>Service Calculator</h3> 
                       <p> Calculate the cost of service for your motorcycle.</p>
                        </div>
                        <button className="serbtn">Explore</button>
                    </div>
                </div>
          
        </div>
        <div className="serfParent">
                <div className=" serFChild serFChild2">
                <div className="serWrite">
                        <div className="sWritten">
                        <h3>Service History
                      </h3> 
                       <p>  All your past service records at one place.</p>
                        </div>
                        <button className="serbtn">Explore</button>
                    </div>
                </div>
          
        </div>
        <div className="serfParent">
                <div className=" serFChild serFChild3">
                <div className="serWrite">
                        <div className="sWritten">
                        <h3>Book a Service
                        </h3> 
                       <p> Convenient and seamless service booking appointment.</p>
                        </div>
                      
                        <button className="serbtn">Book Now</button>
                        <button className="serbtn2">Request a Call</button>
                    </div>
                </div>
          
        </div>
        <div className="serfParent">
                <div className=" serFChild serFChild4">
                <div className="serWrite">
                        <div className="sWritten">
                       <h3>Ride Sure Always</h3> 
                       <p> Get complete coverage for all your journeys.</p>
                        </div>
                        <button className="serbtn">Explore More</button>
                    </div>
                </div>
          
        </div>
        </div>
        <div className="srnavbar">
            <h3>Royal Enfield Service</h3>
        </div>
        <div className="srtpage">
            <div className="clrchng">
            <div className="srleft">
            <h1>Service Booking</h1>
            <h4>Make an appointment for Royal Enfield service from the safety and comfort of your home.</h4>
            <h2>Toll Free Number :</h2>
            <h3>1800 210 008</h3>
            </div>
            <div className="srRight">
            <div className="servForm">
                <label>Please fill in your details</label>
                <form>
                <input type="text" className="nameE" placeholder="Enter your Name"/>
                <input type="text" className="Email" placeholder="Enter your Email"/>
                <input type="text" className="State" placeholder="Enter your State"/>
                <input type="text" className="City" placeholder="Enter your City"/>
              
                <input type="Date" className="Date" placeholder="Enter your City"/>
              
                <input type="text" className="City" placeholder="Enter bike name"/>
              
                <input type="number" className="mobilen" placeholder="Enter your Mobile Number"/>
                 <h4><strong>Disclaimer :</strong> By signing this form/checking this box, you acknowledge and agree that we may use the information you share with us, to communicate with you through e-mails, text messages and calls, in order to provide our product or service related information and/or for promotional and marketing purposes. All information provided will be secured and processed as per our privacy policy. For Service at Doorstep option, nominal charges will be applicable.</h4>
                 <input type="checkbox" className="cheackbox" id="cheackbox" />
                    <label for="cheackbox" className="mcheck">I accept the term and condition as well as privacy policy</label>
                 <button className="servbtn">Submit</button>
                </form>
               
            </div>
                
            </div>
            </div>
        </div>
        </>
    )
}
export default Service;
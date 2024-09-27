import React from "react";

const Login=()=>{
    return(
        <>
        <div className="Loginpage">
        <div className="tan1">
        </div>
        <h1>Log in to your Royal Enfield account</h1>
          <form>
            <input type="text" className="mobNum" placeholder="Enter Email/Mob Number"></input>
            <input type="password" className="mobNum2" placeholder="Enter Your Password"></input>
            <button className="logbtn">Login</button>
            <button className="frgtbtn"><h4>Forgot Password ?</h4></button>
            
          </form>

          <div className="singup">
            <h2>New to royalenfield.com?</h2>
            <button className="logbtns">Create an account</button>
            <h3>Or sign in via</h3>
            <button className="signfb">Sign in with Facebook</button>
            <button className="signmail">Sign in with Google</button>
          </div>

        </div>
         
        </>
    )
}
export default Login;
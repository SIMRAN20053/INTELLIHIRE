import React from "react";
import './signup.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
function Signup(){
    return(
        <>
        <div className="signup-page">
            <div className="signup-card">
                <div className="Header">
    <h2>IntelliHire</h2>
</div>
<div className="sign-subtitle">
    <p>Create your account to get started
</p>
</div>
<div className="user-role">
    <button className="Recruiter">Recruiter</button> 
    <button className="Candidate">Candidate</button>
</div>
<div className="details">
    <div className="F-name">
        <label>Full Name</label><br/>
        <input type="text" placeholder="Enter your name" className="name"></input>
    </div>
       <div className="Email">
 <label>Email Address</label><br/>
 <input type="email" placeholder="you@company.com" className="E-input"/>
 </div>
 <div className="company">
    <label>Company Name</label><br/>
     <input type="text" placeholder="Your Company " className="C-input"/>
 </div>
 <div className="Pass">
  <label>Password</label><br/>
 <input type="password" placeholder="Create a strong password" className="P-input"/>
 </div>
 <div className="Pass-confirm">
  <label> Confirm Password</label><br/>
 <input type="password" placeholder="Re-enter your password" className="passwordconfirm-input"/>
 </div>
 <div className="policy">
    <input type="checkbox" id="policy"/>
    <label htmlFor="policy">I agree to the <a href="#">Terms of Service</a> and <br/><a href="#">Privacy Policy</a></label>
 </div>
 <div className="Form-action">
    <button type="submit" className="Submit">Create Account</button>
 </div>
</div>
<div className="signup-divider">
    <p>-----------or sign up with-----------</p>
</div>
<div className="signup-social">
    <button className="G-btn">
         <FcGoogle/>
         <span className="G-input">Google</span>
    </button>
    <button className="F-btn">
        <FaFacebook/>
        <span className="Face-input">
            Facebook
        </span>
    </button>
</div>
<div className="signup-Footer">
    <p>Already have an account?<a href="#">Login</a></p>
</div>
            </div>
        </div>
        </>
    )
}
export default Signup;
import React from "react";
import{FcGoogle} from"react-icons/fc";
import{FaFacebook} from"react-icons/fa";
import './login.css';
function Login(){
    return(
        <>
        <div className="auth-page">
        <div className="auth-card">
<div className="header">
    <h2>IntelliHire</h2>
</div>
<div className="auth-subtitle">
    <p>Welcome back! Please login to continue
</p>
</div>
<div className="toggle-user">
    <button className="recruiter">Recruiter</button> 
    <button className="candidate">Candidate</button>
</div>
<div className="credentials">
    <form>
        <div className="email">
 <label>Email Address</label><br/>
 <input type="email" placeholder="you@company.com" className="email-input"/><br/>
 </div>
 <div className="pass">
  <label>Password</label><br/>
 <input type="password" placeholder="Enter your password" className="pass-input"/>
 </div>
    </form>
    <div className="form-options">
<div className="remember-me">
    <input type="checkbox" id="remember"/>
    <label htmlFor="remember">Remember me</label>
</div>
<div className="forgot-password">
    <a href="#">Forgot Password ?</a>
</div>
</div>
<div className="form-action">
    <button  type="submit" className="submit-btn">Login</button>
</div>
</div>
<div className="auth-divider">
    <p>-----------or continue with-----------</p>
</div>
<div className="auth-social">
<button className="google-btn">
    <FcGoogle/>
    <span className="google-input"> Google</span>
</button>
<button className="facebook-btn">
    <FaFacebook/>
    <span className="facebook-input">Facebook</span>
</button>
</div>
<div className="auth-footer">
    <p>Don't have an account? <a href="#">Sign up</a></p>
</div>
 </div>
        </div>
        </>
    )
}
export default Login;
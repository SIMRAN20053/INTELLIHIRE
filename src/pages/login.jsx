import React, {useState} from "react";
import{FcGoogle} from"react-icons/fc";
import{FaFacebook} from"react-icons/fa";
import './login.css';
function Login(){
    const[email,setEmail]=useState("");
        const[password,setPassword]=useState("");
        const handleLogin=async ()=>{
            const response=await fetch(
             "http://127.0.0.1:5000/auth/login",
             {
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                })
             }
            );
            const data=await response.json();
            console.log(data);
        };
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
 value={email}
 onChange={(e)=>setEmail(e.target.value)}

 </div>
 <div className="pass">
  <label>Password</label><br/>
 <input type="password" placeholder="Enter your password" className="pass-input"/>
 value={password}
 onChange={(e)=>setPassword(e.target.value)}
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
    <button  type="submit" className="submit-btn" onClick={handleLogin}>Login</button>
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
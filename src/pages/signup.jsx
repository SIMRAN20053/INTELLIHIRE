import React ,{useState} from "react";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './signup.css';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
function Signup(){
    const[role,setRole]=useState("Candidate");
    const[email,setEmail]=useState("");
    const[password,setPassword]=useState("");
    const[companyname,setCompanyname]=useState("");
    const[fullname,setFullname]=useState("");
    const[confirmpassword,setConfirmPassword]=useState("");
    const[error,setError]=useState("");
    const navigate=useNavigate();
    const handleSignup =async()=>{
        if(password!==confirmpassword){
            setError("Passwords do not match");
            return;
        }
        setError("")
        const response= await fetch(
            "http://127.0.0.1:5000/auth/signup",
        {
        method :"POST",
        headers:{
        "Content-Type":"application/json"
        },
        body:JSON.stringify({
            name:fullname,
            email:email,
            password:password,
            role:role,
            company:companyname,
        }
        )
        }
        );
        const data =await response.json();
        if (response.ok){
            if(role==="Recruiter"){
                navigate("/uploadjob")
            }else{
                navigate("/dashboard")
            }
        }
        console.log(data);
    }
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
    <button className="Recruiter" onClick={()=>setRole("Recruiter")}>Recruiter</button> 
    <button className="Candidate" onClick={()=>setRole("Candidate")}>Candidate</button>
</div>
<div className="details">
    <div className="F-name">
        <label>Full Name</label><br/>
        <input type="text" placeholder="Enter your name" className="name"
         value={fullname}
        onChange={(e)=>setFullname(e.target.value)}
          />
    </div>
       <div className="Email">
 <label>Email Address</label><br/>
 <input type="email" placeholder="you@company.com" className="E-input"
 value={email}
 onChange={(e)=>setEmail(e.target.value)}
 />
 </div>
 {role==="Recruiter" && (
    <div className="company">
    <label>Company Name</label><br/>
     <input type="text" placeholder="Your Company " className="C-input"
       value={companyname}
     onChange={(e)=>setCompanyname(e.target.value)}
     />
 </div>
 )
 }
 <div className="Pass">
  <label>Password</label><br/>
 <input type="password" placeholder="Create a strong password" className="P-input" value={password}
 onChange={(e)=>setPassword(e.target.value)}
 />
 </div>
 <div className="Pass-confirm">
  <label> Confirm Password</label><br/>
 <input type="password" placeholder="Re-enter your password" className="passwordconfirm-input"
 value={confirmpassword}
 onChange={(e)=>setConfirmPassword(e.target.value)}
 />
 {error &&<p style={{color:"red"}}>{error}</p>}
 </div>
 <div className="policy">
    <input type="checkbox" id="policy"/>
    <label htmlFor="policy">I agree to the <a href="#">Terms of Service</a> and <br/><a href="#">Privacy Policy</a></label>
 </div>
 <div className="Form-action">
    <button type="button" className="Submit" onClick={handleSignup}>Create Account</button>
 </div>
</div>
<div className="signup-divider">
    <p>-----------or sign up with-----------</p>
</div>
<div className="signup-Footer">
    <p>Already have an account?<Link to ="/login">Login</Link></p>
</div>
            </div>
        </div>
        </>
    )
}
export default Signup;
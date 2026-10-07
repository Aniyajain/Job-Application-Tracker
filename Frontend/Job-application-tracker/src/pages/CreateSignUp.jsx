import React, { useState } from "react";
import IITDLOGO from "../assets/IITDLOGO.png";
import "../pagesCSS/CreateSignUp.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function CreateSignUp(){
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const userRegister = async()=>{
        try {
            const response = await axios.post("http://localhost:5000/api/createUser",
            {
                Email : email,
                Password : password,
            }
            
        )
        if(response.status == 201){
            toast.success("Account created Successfully");
            setTimeout(()=>{
                navigate("/login");
            }, 1000);

            
        }
       
        console.log(response.data);
            
        } catch (error) {
            if(error.response?.status == 409){
                toast.info("User with this email already exists");
            }
            else if(error.response?.status == 400){
                toast.warning("Enter Valid Email && Password");

            }
            else{
                toast.error("Something went wrong");
            }
            
        }
        
    }
    return(
         <>
        <div>
<div>
    <div className="logotitle1">
              <img
                src={IITDLOGO}
                alt="loading...."
                style={{ height: "60px", width: "63px", marginTop: "8px" }}
             onClick={()=> navigate("/")}  />
              <h1>Job Application Tracker</h1>
            </div>
            <ToastContainer/>
 <div className="content1">
       <h1>Build an interview-ready resume in less time</h1>
    <h4>Join over 4 Million Teal Members and unlock your full career potential.</h4>
    <div className="google"> <img src="https://images.rapidload-cdn.io/spai/ret_blank,q_lossless,to_avif,w_460,h_460/https://estateandprobatelawyer.com/wp-content/uploads/2025/05/Google-2025-G-logo.webp" alt="loading..." style={{width: "30px" , height: "24px" , borderRadius: "50%"}} />Continue with Google </div>
    <div className="Linkedin"> <img src="https://th.bing.com/th/id/OIP.NN_29U5mI6l_KAfhsxQksgHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="loading..." style={{width: "30px" , height: "24px" , borderRadius: "50%"}}  />Continue with LinkedIn </div>
    <div className="withemail">or signup with your email</div>
    <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)} />
    <br />
    <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
    <div className="getStart" onClick={userRegister}>Get Started</div>
    <div>Already a Member? <span style={{ color:"#f5b501"}} onClick={()=>navigate("/login")}>Sign In</span></div>
    <div className="termofuse">By signing up, I agree to the Terms of Use and Privacy Policy</div>
 </div>

</div>

        </div>
         </>
    )
}
export default CreateSignUp;
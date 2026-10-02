import React from "react";
import IITDLOGO from "../assets/IITDLOGO.png";
import "../pagesCSS/SignupPage.css";
import { useNavigate } from "react-router-dom";
function SignupPage(){
    const navigate = useNavigate();
    return(
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
 <div className="content1">
       <h1>Build an interview-ready resume in less time</h1>
    <h4>Join over 4 Million Teal Members and unlock your full career potential.</h4>
    <div className="google"> <img src="https://images.rapidload-cdn.io/spai/ret_blank,q_lossless,to_avif,w_460,h_460/https://estateandprobatelawyer.com/wp-content/uploads/2025/05/Google-2025-G-logo.webp" alt="loading..." style={{width: "30px" , height: "24px" , borderRadius: "50%"}} />Continue with Google </div>
    <div className="Linkedin"> <img src="https://th.bing.com/th/id/OIP.NN_29U5mI6l_KAfhsxQksgHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="loading..." style={{width: "30px" , height: "24px" , borderRadius: "50%"}}  />Continue with LinkedIn </div>
    <div className="withemail">or signup with your email</div>
    <input type="email"  />
    <div className="getStart">Get Started</div>
    <div>Already a Member? <span style={{ color:"#f5b501"}} onClick={()=>navigate("/createacc")}>Sign In</span></div>
    <div className="termofuse">By signing up, I agree to the Terms of Use and Privacy Policy</div>
 </div>
</div>
        </div>
    )
}
export default SignupPage;
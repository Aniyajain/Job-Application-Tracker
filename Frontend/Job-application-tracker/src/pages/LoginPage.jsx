import React from "react";
import IITDLOGO from "../assets/IITDLOGO.png";
import "../pagesCSS/Loginpage.css";

function LoginPage(){
    return(
        <div className="topalignment">
            <div className="logotitle">
                <img src={IITDLOGO} alt="loading...." style={{height: "60px", width:"63px" , marginTop:"8px"}} />
                <h1>Job Application Tracker</h1>
            </div>
             <div className="lognbtn">
                <div id="AIRESUME">AI Resume Builder </div>
                <div id="TOOL">Tools</div>
            </div>
            <div className="lognbtn">
                <div id="signbtn">Signup</div>
                <div id="login">Login</div>
            </div>
        </div>
    )
}

export default LoginPage;
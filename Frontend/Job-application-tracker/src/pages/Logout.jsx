import React from "react";
import "../pagesCSS/Logout.css";
import {Search ,Bell, CircleUser, LogOut, Bookmark , SquarePlus, LayoutGrid , House, Goal, BriefcaseBusiness, MapPin, ChartNoAxesColumnIncreasing, IndianRupee , RotateCcw, StarCheck , SquareArrowOutUpRight , ArrowRight}from "lucide-react";
import IITDLOGO from "../assets/IITDLOGO.png";
import { Navigate, useNavigate } from "react-router-dom";
function Logout(){
    const navigate = useNavigate();
    return(
       <div>
                   <div className="topalignment1">
               <div className="logotitle">
                 <img
                   src={IITDLOGO}
                   alt="loading...."
                   style={{ height: "60px", width: "63px", marginTop: "8px" }}
                 onClick={()=> navigate("/")} />
                 <h1>Job Application Tracker</h1>
               </div>
               <div className="bell">
                   <div> <input type="text" placeholder="Search Jobs , Companies.." />  <Search  size={19}/>  </div>
                   <div className="user">  
                       <span><Bell size={29} style={{color: "#f5b501"  }}/></span>
                       <span><CircleUser size={29} style={{color: "#f5b501"}} /></span>
                   </div>
                   
               </div>
       
              
               
             </div>
       
             <div className="Bottom">
                <div className="pt1">
                           <div>
                               <div className="bt1" onClick={()=>navigate("/Main")}> <House   /> Dashboard</div>
                           <div className="bt1" onClick={()=>navigate("/Applications")}> <LayoutGrid />Application</div>
                           <div className="bt1" onClick={()=>(navigate("/Add"))}> <SquarePlus />Add Applications</div>
                           <div className="bt1" onClick={()=>navigate("/SavedJobs")}> <Bookmark />Saved Jobs</div>
                           <div className="bt1" onClick={()=>navigate("/Profile")}> <CircleUser  />Profile</div>
                           <div className="bt1" onClick={()=>navigate("/Logout")}> <LogOut />Logout</div>
                           </div>
                           
                           <div className="goal"> <Goal  size={34}/>Small steps everyday leads to big career goals</div>
                       </div>
<div>
    <div className="icnLogout">
<Bookmark size={40}/>Logout
</div>
                       <div className="boxLogout">
                        <div>
                        <LogOut size={60} style={{color: "#f5b501"}} />
                       </div>
                       <div style={{fontSize: "37px", fontWeight: "bold"}}>Are you sure you want to logout ? </div>
                       <div style={{color: "gray", fontSize: "20px"}}>You will redirected to the login page. </div>

                       <div className="btnArrange">
                        <button className="logoutBtn">Logout</button>
                        <button className="cancelBtn">Cancel <ArrowRight /></button>
                       </div>
                       </div>
</div>
       
             </div>
       
               </div>
    )
}

export default Logout;
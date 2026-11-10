import React from "react";
import "../pagesCSS/Logout.css";
import {Search ,Bell, CircleUser, LogOut, Bookmark , SquarePlus, LayoutGrid , House, Goal, BriefcaseBusiness, MapPin, ChartNoAxesColumnIncreasing, IndianRupee , RotateCcw, StarCheck , SquareArrowOutUpRight}from "lucide-react";
import IITDLOGO from "../assets/IITDLOGO.png";
import { Navigate, useNavigate } from "react-router-dom";
function Profile(){
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
                           <div className="bt1"> <LayoutGrid />Application</div>
                           <div className="bt1" onClick={()=>(navigate("/Add"))}> <SquarePlus />Add Applications</div>
                           <div className="bt1"> <Bookmark />Saved Jobs</div>
                           <div className="bt1"> <CircleUser  />Profile</div>
                           <div className="bt1"> <LogOut />Logout</div>
                           </div>
                           
                           <div className="goal"> <Goal  size={34}/>Small steps everyday leads to big career goals</div>
                       </div>
       
             </div>
       
               </div>
    )
}
export default Profile;

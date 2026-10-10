import react from "react"
import "../pagesCSS/AddApplication.css";
import {Search ,Bell, CircleUser, LogOut, Bookmark , SquarePlus, LayoutGrid , House, Goal, BriefcaseBusiness, MapPin, ChartNoAxesColumnIncreasing, IndianRupee , RotateCcw }from "lucide-react";
import { useNavigate } from "react-router-dom";
import IITDLOGO from "../assets/IITDLOGO.png";
function AddApplication(){
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
                        <div className="bt1"> <House   /> Dashboard</div>
                    <div className="bt1"> <LayoutGrid />Application</div>
                    <div className="bt1" onClick={()=>(navigate("/Add"))}> <SquarePlus />Add Applications</div>
                    <div className="bt1"> <Bookmark />Saved Jobs</div>
                    <div className="bt1"> <CircleUser  />Profile</div>
                    <div className="bt1"> <LogOut />Logout</div>
                    </div>
                    
                    <div className="goal"> <Goal  size={34}/>Small steps everyday leads to big career goals</div>
                </div>

        
        
            <div className="pt2">
                <div className="Headlinept2"> <BriefcaseBusiness size={34}/>Find Next Opportunity</div>
                <div className="Subheadingpt2">Search and explore the latest job openings. Apply to your dream jobs abd keep track of them here. </div>
                <div className="searchDetails">
                    <div>Search Jobs</div>
                    <input type="search" placeholder="e.g. Software Engineer , React, etc" />
                    <div> <MapPin />Location</div>
                    <select >
                        <option value="">Delhi</option>
                        <option value="">banglore</option>
                        <option value="">Mumbai</option>
                        <option value="">Pune</option>
                        <option value="">Hydrabad</option>
                    </select>
                    <div> <BriefcaseBusiness/>Job Type</div>
                   <div>
                    <input type="checkbox" name="" id="" />
                   <label>Full Time</label>
                   <input type="checkbox" name="" id="" />
                   <label>Part Time</label>
                   <input type="checkbox" name="" id="" />
                   <label>Internship</label>
                   <input type="checkbox" name="" id="" />
                   <label>Contract</label>
                   </div>
                   <div><ChartNoAxesColumnIncreasing /> Experience</div>
                    <select >
                        <option value="">0-1 Years</option>
                        <option value="">2-3 Years</option>
                        <option value="">3-4 Years</option>
                        <option value="">4-5 Years</option>
                        <option value="">5 + Years</option>
                    </select>

                    <div><IndianRupee /> Salary Range (LPA) </div>
                    <input type="number" placeholder="Min"  /> - <input type="number" placeholder="Max" />

                    <div className="btns">
                        <button className="btnReset"> <RotateCcw />Reset</button>
                     <button  className="btnSearch">Search</button>
                    </div>



                </div>
                
            </div>
             
        
      </div>
        </div>
    )
}

export default  AddApplication; 
import React from "react";
import "../pagesCSS/Application.css";
import {Search ,Bell, CircleUser, LogOut, Bookmark , SquarePlus, LayoutGrid , House, Goal, BriefcaseBusiness, MapPin, ChartNoAxesColumnIncreasing, IndianRupee , RotateCcw, StarCheck , SquareArrowOutUpRight, BookText, Eye, Trash, ChevronLeft, ChevronRight}from "lucide-react";
import IITDLOGO from "../assets/IITDLOGO.png";
import { Navigate, useNavigate } from "react-router-dom";
function Application(){
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
<div>
    <div className="ALLOptions">
        <div>
            <div style={{color: "#f5b501" , fontSize: "30px", width: "200px", display: "flex", alignItems: "center", justifyContent: "center", margin: "20px"}}><BookText  size={38}/> Applications</div>
    <div style={{color: "gray", width: "400px" , marginLeft: "20px" , fontSize: "20px"}}>View and track all your job applications here. </div>
        </div>
        <div >
            <select className="AllStatus" >
            <option > All Status</option>
            </select>
            </div>
    </div>
    <table>
        <thead>
            <tr>
                <th>Company </th>
                <th>Role</th>
                <th>Appiled on</th>
                <th>Status </th>
                <th>Action</th>
            </tr>
            <tr>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjeX6ku69_92RMDzmUn_e0swxsNonUDN2JaTZ_XamgOw&s=10" style={{width: "30px"}}  /> Google</td>
                <td>Software Engineer</td>
                <td>Aug 25, 2026</td>
                <td> <span className="Applied">Applied</span></td>
                 <td><span><Eye /> <Trash style={{color:"red"}} /></span></td>
            </tr>
            <tr>
                <td><img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/3840px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" style={{width: "30px"}}  /> Microsoft</td>
                <td>SDE Intern</td>
                <td>Sept 30, 2026</td>
                 <td><span className="Applied">Applied</span></td>
                 <td><span><Eye /> <Trash  style={{color:"red"}}/></span></td>
            </tr>
            <tr>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPmTPqlHJAqy2bZ17t_YF1pc9pBmqt_2z7L-AfLRBmoA&s=10" alt="" style={{width: "30px"}} />Flipkart</td>
                <td>Research Intern</td>
                <td>Sept 25, 2026</td>
                <td><span className="interview">Interview</span></td>
                <td><span><Eye /> <Trash style={{color:"red"}} /></span></td>
            </tr>
            <tr>
                <td><img src="https://companieslogo.com/img/orig/ACN-cce5b411.png?t=1720244490" alt="" style={{width: "30px"}} />Accenture</td>
                <td>Web Developer Associate</td>
                <td>Sept 20, 2026</td>
                <td><span className="Reject">Rejected</span></td>
                <td><span><Eye /> <Trash style={{color:"red"}} /></span></td>
            </tr>
            <tr>
                <td><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTadVVT-RI1hIIQsPkYo9uK4Bvj_O2naJVyHPZVRQjMcLP4ulU8LPtQ5H8&s=10" alt="" style={{width: "30px"}} /> TCS</td>
                <td>Software Developer</td>
                <td>Sept 28, 2026</td>
                <td><span className="interview">Interview</span></td>
                <td><span><Eye /> <Trash style={{color:"red"}} /></span></td>
            </tr>
            <tr>
                <td>Showing 1-5 of 5 applications </td>
                <td>
                    <button><ChevronLeft size={14}  /></button>
                    <span>1</span>
                    <button><ChevronRight size={14} /></button>
                </td>
            </tr>
        </thead>
    </table>
</div>
      </div>

        </div>
    )
}
export default Application;
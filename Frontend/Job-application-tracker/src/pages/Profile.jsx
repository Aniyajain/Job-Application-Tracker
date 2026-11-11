import React from "react";
import "../pagesCSS/Profile.css";
import {Search ,Bell, CircleUser, LogOut, Bookmark , SquarePlus, LayoutGrid , House, Goal, BriefcaseBusiness, MapPin, ChartNoAxesColumnIncreasing, IndianRupee , RotateCcw, StarCheck , SquareArrowOutUpRight, User, Pencil, ScrollText, Mail, Phone, GraduationCap  }from "lucide-react";
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

                       <div>
                        <div className="pageHeadline">

                        <div style={{display: "flex", flexDirection: "row" , fontSize: "34px" , marginLeft: "15px", gap: "12px"}}>
                            <div style={{color: "#f5b501"}}><User size={34} /></div>
                        <div style={{color: "#f5b501"}}>My Profile</div>
                        </div>
                        <div ><button style={{borderRadius: "12px" , backgroundColor: "white", color: "#f5b501" , border:"2px solid #f5b501", padding: "8px" , display: "flex", alignItems: "center" , justifyContent: "center" , fontWeight: "bold" , gap: "7px" , marginLeft: "12px" , fontSize: "15px" , width: "160px"}}><Pencil /> Edit Profile</button></div>
                       </div>
                       <div style={{marginLeft: "10px" , color: "gray", fontSize: "19px"}}>View and manage your information</div>
                       
                       <div className="InfoBox">
                       <div style={{width: "340px"}}>
                         <div><img src="https://img.magnific.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740&q=80" alt="loading.." style={{width: "90%", marginLeft: "20px"}} /></div>
                        <div style={{marginLeft: "90px"}}><button style={{color: " #f5b501", display: "flex" , alignItems: "center" , justifyContent: "center", gap: "12px" , padding: "9px", backgroundColor: "white", borderRadius: "12px" , border: "2px solid #f5b501" , fontWeight: "bold", fontSize: "17px" }}><Pencil/> Change Photo</button></div>
                       </div>
                       <div style={{border: "2px solid rgb(175, 175, 175)" , borderRadius: "12px", width:"600px" , height: "500px", padding: "18px"  }}>
                        <div style={{display: "flex" , alignItems: "center" , gap: "12px", marginLeft: "10px", fontSize: "30px", marginBottom: "10px" , fontWeight: "bold" , fontSize: "24px"}}> <ScrollText size={34} />Personal Details</div>
                        <div style={{display: "flex", flexDirection: "row" , gap: "12px" , fontSize: "21px"}}>
                            <div style={{display: "flex" , alignItems: "center" , gap: "12px", marginBottom: "20px" , marginTop: "20px" }}> <User/>Name</div>
                        <div style={{ marginBottom: "20px" , marginTop: "20px" , marginLeft: "40px"}}>Aniya Jain</div>
                        </div>
                       <div  style={{display: "flex", flexDirection: "row" , gap: "12px" , fontSize: "21px"}}>
                         <div style={{display: "flex" , alignItems: "center" ,  gap: "12px" , marginBottom: "20px" , marginTop: "20px" }}><Mail />Email</div>
                        <div style={{ marginBottom: "20px" , marginTop: "20px" , marginLeft: "40px"}}>aniyajain@gmail.com</div>
                       </div>
                        <div  style={{display: "flex", flexDirection: "row" , gap: "12px" , fontSize: "21px"}}>
                            <div style={{display: "flex" , alignItems: "center" , gap: "12px", marginBottom: "20px", marginTop: "20px" }}> <Phone />Mobile</div>
                        <div style={{ marginBottom: "20px" , marginTop: "20px" , marginLeft: "40px"}}>782345091</div>
                        </div>
                       <div style={{display: "flex", flexDirection: "row" , gap: "12px" , fontSize: "21px"}}>
                         <div style={{display: "flex" , alignItems: "center" , gap: "12px", marginBottom: "20px" , marginTop: "20px" }}> <GraduationCap />Education</div>
                        <div style={{ marginBottom: "20px" , marginTop: "20px" , marginLeft: "30px"}}>Mits Gwalior</div>
                       </div>
                        <div style={{display: "flex", flexDirection: "row" , gap: "12px" , fontSize: "21px"}}>
                            <div style={{display: "flex" , alignItems: "center" , gap: "12px", marginBottom: "20px" , marginTop: "20px" }}> <MapPin/>Location</div>
                        <div style={{ marginBottom: "20px" , marginTop: "20px" , marginLeft: "40px"}}>Gwalior , India</div>
                        </div>
                        <div style={{borderBottom: "2px solid rgb(175, 175, 175)" , marginTop: "10px"}}></div>
                        <div style={{display: "flex", flexDirection: "row" , gap: "12px", fontSize: "21px"}}>
                            <div style={{display: "flex" , alignItems: "center" ,  gap: "12px" , marginBottom: "20px" , marginTop: "20px", fontWeight: "bold" , fontSize: "24px" }}> <User size={38}/>About Me</div>
                        <div style={{ marginBottom: "20px" , marginTop: "20px" , marginLeft: "20px"}}>final Year Btech Student will full stack development skills</div>
                        </div>
                       </div>
                       </div>
                       </div>
                       
             </div>
       
               </div>
    )
}
export default Profile;

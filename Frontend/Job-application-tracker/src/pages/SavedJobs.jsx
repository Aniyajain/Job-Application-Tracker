import React from "react";
import "../pagesCSS/SavedJobs.css";
import {Search ,Bell, CircleUser, LogOut, Bookmark , SquarePlus, LayoutGrid , House, Goal, BriefcaseBusiness, MapPin, ChartNoAxesColumnIncreasing, IndianRupee , RotateCcw, StarCheck , SquareArrowOutUpRight , ArrowRight}from "lucide-react";
import IITDLOGO from "../assets/IITDLOGO.png";
import {  useNavigate } from "react-router-dom";
function SavedJobs(){
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

                              <div style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    width: "100%",
    padding: "0 20px"
}}>
                                <div>
                                    <div  style={{display: "flex" , alignItems: "center" , gap: "10px" , color : "#f5b501" , fontSize : "34px" , fontWeight: "bold", marginLeft : "20px" , marginBottom : "10px" , marginTop : "10px"}}> <Bookmark  size={34}/>Saved Jobs</div>
                                <div style={{fontSize: "20px" , marginLeft : "20px" , color: "gray"}}>Jobs you have saved for later. Don't miss out on these opportunity ! </div>
                                </div>
                                <div style={{display: "flex" , alignItems: "center" , gap: "10px" , color: "#f5b501" , fontSize: "24px"}}>View All <ArrowRight /></div>
                                
                              </div>
                               <div>
                                <div>
                                    <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="loading..."  style={{width: "50%"}}/>
                                </div>
                              </div>
                             
              
                    </div>
              
                      </div>
    )
}
export default SavedJobs;
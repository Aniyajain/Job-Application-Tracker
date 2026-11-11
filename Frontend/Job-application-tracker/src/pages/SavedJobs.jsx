import React, { useState } from "react";
import "../pagesCSS/SavedJobs.css";
import {Search ,Bell, CircleUser, LogOut, Bookmark , SquarePlus, LayoutGrid , House, Goal, BriefcaseBusiness, MapPin, ChartNoAxesColumnIncreasing, IndianRupee , RotateCcw, StarCheck , SquareArrowOutUpRight , ArrowRight , Trash , Star}from "lucide-react";
import IITDLOGO from "../assets/IITDLOGO.png";
import {  useNavigate } from "react-router-dom";
function SavedJobs(){
    const navigate = useNavigate();
    const [hover , setHover] = useState(false);
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
                                 <div style={{
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    // gap: "190px",
    width: "140%",
    
}}>
                                <div>
                                    <div  style={{display: "flex" , alignItems: "center" , gap: "10px" , color : "#f5b501" , fontSize : "34px" , fontWeight: "bold", marginLeft : "20px" , marginBottom : "10px" , marginTop : "20px"}}> <Bookmark  size={34}/>Saved Jobs</div>
                                <div style={{fontSize: "20px" , marginLeft : "20px" , color: "gray"}}>Jobs you have saved for later. Don't miss out on these opportunity ! </div>
                                </div>
                                <div style={{display: "flex" , alignItems: "center" , gap: "10px" , color: hover ? "white":"#f5b501" , backgroundColor: hover ? "#F9D166" : "white",fontSize: "24px" , border: "2px solid #f5b501" , borderRadius: "12px" , height: "30px" ,padding: "7px", marginTop: "30px" , fontWeight: "bold"}} onMouseEnter={()=> setHover(true)}
                                    onMouseLeave={()=>setHover(false)}>View All <ArrowRight /></div>
                                
                              </div>
                               <div>
                                <div className="jobsSaved">
                                   <div>
                                     <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/3840px-Google_%22G%22_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail" alt="loading..."  style={{width: "70px" , height: "70px"}}/>
                                   </div>
                                   <div>
                                    <div style={{fontSize: "24px" , fontWeight: "bold"}}>Software Engineer</div>
                                    <div style={{fontSize: "20px" , fontWeight: "bold" , marginTop: "7px" , marginBottom: "6px"}}>Google</div>
                                    <div style={{display: "flex" , flexDirection: "row", gap: " 20px"}}>
                                        <div style={{display: "flex" , alignItems: "center" , gap : "10px" , marginRight: "7px"}}> <MapPin size={17}  />Bangalore , India</div>
                                        <div style={{display: "flex" , alignItems: "center" , gap : "10px", marginRight: "7px"}}> <BriefcaseBusiness size={17} />Full Time</div>
                                        <div style={{display: "flex" , alignItems: "center" , gap : "10px"}}> <Star size={17}  />0-2 Yrs</div>
                                    </div>
                                    <div style={{marginTop: "10px" , fontSize: "18px"}}>Work on scalable system and help build products used by billions...</div>

                                   </div>
                                   <div>
                                    <div style={{display: "flex" , flexDirection: "row", gap: "10px" , marginBottom: "30px"}}>
                                        <div><Bookmark size={39} style={{fill: "#f5b501" , color: "#f5b501" }} /></div>
                                        <div>
                                            <div style={{fontSize: "21px" , color: "black" , fontWeight: "bold"}}>Saved On</div>
                                            <div style={{color: "black" , fontSize: "19px" , marginTop: "7px" }}>1 Oct 2026</div>
                                        </div>
                                    </div>
                                   <div style={{display: "flex" , flexDirection: "row"}}>
                                     <div><button style={{display: "flex" , alignItems: "center" , gap : "10px" , border: "2px solid #f5b501" , color: "#f5b501" , backgroundColor: "white" , borderRadius: "9px", padding: "4px" , fontWeight: "bold" , fontSize: "15px" , marginRight: "8px"}}>View Details <ArrowRight size={17}/></button></div>
                                    <div style={{color: "#00008B"}}><Trash /></div>
                                   </div>
                                   </div>


                                </div>
                                <div className="jobsSaved">
                                   <div>
                                     <img src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail&_=20210729021049" alt="loading..."  style={{width: "70px" , height: "70px"}}/>
                                   </div>
                                   <div>
                                    <div style={{fontSize: "24px" , fontWeight: "bold"}}>SDE Intern</div>
                                    <div style={{fontSize: "20px" , fontWeight: "bold" , marginTop: "7px" , marginBottom: "6px"}}>Microsoft</div>
                                    <div style={{display: "flex" , flexDirection: "row", gap: " 20px"}}>
                                        <div style={{display: "flex" , alignItems: "center" , gap : "10px" , marginRight: "7px"}}> <MapPin size={17}  />Redmond , USA</div>
                                        <div style={{display: "flex" , alignItems: "center" , gap : "10px", marginRight: "7px"}}> <BriefcaseBusiness size={17} />Internship</div>
                                        <div style={{display: "flex" , alignItems: "center" , gap : "10px"}}> <Star size={17}  />0-1 Yrs</div>
                                    </div>
                                    <div style={{marginTop: "10px" , fontSize: "18px"}}>Join our team to build  innovative solutions....</div>

                                   </div>
                                   <div>
                                    <div style={{display: "flex" , flexDirection: "row", gap: "10px" , marginBottom: "30px"}}>
                                        <div><Bookmark size={39} style={{fill: "#f5b501" , color: "#f5b501" }} /></div>
                                        <div>
                                            <div style={{fontSize: "21px" , color: "black" , fontWeight: "bold"}}>Saved On</div>
                                            <div style={{color: "black" , fontSize: "19px" , marginTop: "7px" }}>28 Sept 2026</div>
                                        </div>
                                    </div>
                                   <div style={{display: "flex" , flexDirection: "row"}}>
                                     <div><button style={{display: "flex" , alignItems: "center" , gap : "10px" , border: "2px solid #f5b501" , color: "#f5b501" , backgroundColor: "white" , borderRadius: "9px", padding: "4px" , fontWeight: "bold" , fontSize: "15px" , marginRight: "8px"}}>View Details <ArrowRight size={17}/></button></div>
                                    <div style={{color: "#00008B"}}><Trash /></div>
                                   </div>
                                   </div>


                                </div>
                                <div className="jobsSaved">
                                   <div>
                                     <img src="https://logos-world.net/wp-content/uploads/2020/07/Accenture-Logo.png" alt="loading..."  style={{width: "90px" , height: "70px"}}/>
                                   </div>
                                   <div>
                                    <div style={{fontSize: "24px" , fontWeight: "bold"}}>Web developer Associate</div>
                                    <div style={{fontSize: "20px" , fontWeight: "bold" , marginTop: "7px" , marginBottom: "6px"}}>Accenture</div>
                                    <div style={{display: "flex" , flexDirection: "row", gap: " 20px"}}>
                                        <div style={{display: "flex" , alignItems: "center" , gap : "10px" , marginRight: "7px"}}> <MapPin size={17}  />Bangalore , India</div>
                                        <div style={{display: "flex" , alignItems: "center" , gap : "10px", marginRight: "7px"}}> <BriefcaseBusiness size={17} />Entry Level</div>
                                        <div style={{display: "flex" , alignItems: "center" , gap : "10px"}}> <Star size={17}  />0-1 Yrs</div>
                                    </div>
                                    <div style={{marginTop: "10px" , fontSize: "18px"}}> build and innovative with accenture....</div>

                                   </div>
                                   <div>
                                    <div style={{display: "flex" , flexDirection: "row", gap: "10px" , marginBottom: "30px"}}>
                                        <div><Bookmark size={39} style={{fill: "#f5b501" , color: "#f5b501" }} /></div>
                                        <div>
                                            <div style={{fontSize: "21px" , color: "black" , fontWeight: "bold"}}>Saved On</div>
                                            <div style={{color: "black" , fontSize: "19px" , marginTop: "7px" }}>28 Sept 2026</div>
                                        </div>
                                    </div>
                                   <div style={{display: "flex" , flexDirection: "row"}}>
                                     <div><button style={{display: "flex" , alignItems: "center" , gap : "10px" , border: "2px solid #f5b501" , color: "#f5b501" , backgroundColor: "white" , borderRadius: "9px", padding: "4px" , fontWeight: "bold" , fontSize: "15px" , marginRight: "8px"}}>View Details <ArrowRight size={17}/></button></div>
                                    <div style={{color: "#00008B"}}><Trash /></div>
                                   </div>
                                   </div>


                                </div>
                              </div>
                             </div>
                             
              
                    </div>
              
                      </div>
    )
}
export default SavedJobs;
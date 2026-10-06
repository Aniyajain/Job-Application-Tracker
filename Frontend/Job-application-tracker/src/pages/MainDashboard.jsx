import react from "react";
import {useNavigate} from "react-router-dom";
import {  Bell , CircleUser , Search , House, LayoutGrid ,SquarePlus, Bookmark, LogOut , Goal, ChartLine,Handshake , Clock9, X ,SquareText, Clock , Check, ArrowRight, MoveUp , CalendarDays, BriefcaseBusiness, MoveDown, MoveRight } from "lucide-react";
import IITDLOGO from "../assets/IITDLOGO.png";
import "../pagesCSS/MainDashboard.css";

function MainDashboard(){
    const navigate  = useNavigate();
    return(
        <div className="bdy">
            <div className="Topheading">
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
            </div>
            {/* //Bottom part  */}
            <div className="BottomContent">
                <div className="pt1">
                    <div>
                        <div className="bt1"> <House   /> Dashboard</div>
                    <div className="bt1"> <LayoutGrid />Application</div>
                    <div className="bt1"> <SquarePlus />Add Applications</div>
                    <div className="bt1"> <Bookmark />Saved Jobs</div>
                    <div className="bt1"> <CircleUser  />Profile</div>
                    <div className="bt1"> <LogOut />Logout</div>
                    </div>
                    
                    <div className="goal"> <Goal  size={34}/>Small steps everyday leads to big career goals</div>
                </div>
                <div className="pt2">
                    <div className="pt2top">
                       <div>
                         <div className="userName">Hey! Aniya </div>
                         <div className="tagline">Track your job applications, stay organised , and never miss opportunity</div>
                       </div>
                        <div className="todaydate"> <CalendarDays />Mon , 05 Oct 2026</div>
                    </div>
                   <div className="statsArrange">
                     <div className="stats1">
                        <div className="iconSize"><SquareText  style={{color:"white" , backgroundColor: "#f5b501", borderRadius: "20px"}}/></div>
                        <div className="App">Total Application</div>
                        <div className="count">8</div>
                        <div className="updateInStats"> <MoveUp  size={13}/> + 2 this week</div>
                    </div>
                     <div className="stats2">
                        <div className="iconSize"><Check  style={{color:"white" , backgroundColor: "green", borderRadius: "20px"}}/></div>
                        <div className="App">Interviews</div>
                        <div className="count">2</div>
                        <div className="updateInStats"> <MoveUp  size={11}/> + 1 this week</div>
                    </div>
                     <div className="stats3">
                        <div className="iconSize"><Clock  style={{color:"white" , backgroundColor: "blue", borderRadius: "20px"}}/></div>
                        <div className="App">Pending</div>
                        <div className="count">4</div>
                        <div className="updateInStats"> No Change</div>
                    </div>
                    <div className="stats4">
                        <div className="iconSize"><X   style={{color:"white" , backgroundColor: "red", borderRadius: "20px"}}/></div>
                        <div className="App">Rejected</div>
                        <div className="count">8</div>
                        <div className="updateInStats"> <MoveDown size={10}/> + 2 this week</div>
                    </div>
                   
                    
                   </div>
                   <div className="pt2bx3">
                    <div className="briefcase">
                        <div className="RecentIcon"> <BriefcaseBusiness size={29} style={{color: "#f5b501"}}/>Recent Applications</div>
                    <div className="ViewAll">View All <MoveRight /></div>
                    </div>
                    <div>
                        <table>
                            <thead>
                                <tr className="headingrow">
                                    <th>Company </th>
                                    <th>Role</th>
                                    <th>Applied On</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                                <tr className="dataOfTable">
                                    <td>TCS</td>
                                    <td>Software Developer Intern</td>
                                    <td>Sep 28, 2025</td>
                                    <td><span className="interview">Interview</span></td>
                                    <td>...</td>
  
                                </tr>
                                <tr className="dataOfTable">
                                    <td>Accenture</td>
                                    <td>Web Developer Intern</td>
                                    <td>Sep 26, 2025</td>
                                    <td> <span className="Applied">Applied</span></td>
                                    <td>...</td>
                                </tr>
                                <tr className="dataOfTable">
                                    <td>Flipkart</td>
                                    <td>Research Intern</td>
                                    <td>Aug 28, 2026</td>
                                    <td>
                                        <span className="Applied">Applied</span>
                                    </td>
                                    <td>...</td>

                                </tr>
                                <tr className="dataOfTable">
                                     <td>Google</td>
                                    <td>Software Engineer Intern</td>
                                    <td>July 28, 2025</td>
                                    <td>
                                        <span className="interview">Interview</span>
                                    </td>
                                    <td>...</td>
                                </tr>
                                <tr className="dataOfTable">
                                    <td>Microsoft</td>
                                    <td>SDE Intern</td>
                                    <td>Sep 28, 2025</td>
                                    <td > <span className="Reject">Rejected</span></td>
                                    <td>...</td>
                                </tr>
                            </thead>
                        </table>
                    </div>
                   </div>
                </div>
                <div className="pt3">
                    <div className="bx1pt3">
                        <div className="quickAct">Quick Actions</div>
                        <div className="Browsejobs"> <Handshake />Browse Jobs</div>
                        <div className="Browsejobs"> <ChartLine />View Insights</div>

                    </div>
                    <div className="bx2pt3">
                        <div className="recentAct"> <Clock9 />Recent Activity</div>
                        <div className="applied">
                            <div><Check style={{color: "green" , backgroundColor: "#98FB98",  borderRadius: "50%"}}/></div>
                            <div className="status">  Applied <div className="Company">TCS <span> • SDE - I</span></div></div>
                        <div className="time">Today , 10:35 PM</div>
                        </div>
                        <div className="applied">
                            <div><Clock style={{color: "blue"}}/> </div>
                            <div  className="status"> Interview Scheduled <div className="Company">Accenture <span> • SDE Intern</span></div></div>
                        <div className="time">2 Oct 2026</div>
                        </div>
                        <div className="applied">
                            <div><SquareText style={{color: "#f5b501" , borderRadius: "50%", backgroundColor: "#fdeac7"}}/></div>
                            <div  className="status"> Application Updated <div className="Company">Flipkart <span> • SDE Intern</span></div></div>
                        <div className="time">25 Sept 2026</div>
                        </div>
                         <div className="applied">
                            <div><X style={{color: "red" , borderRadius: "50%", backgroundColor: "#FFA07A"}} /></div>
                            <div  className="status"> Rejected <div className="Company">Google <span> • SDE Intern</span></div></div>
                        <div className="time">29 Sept 2026</div>
                        </div>

                        <div className="ViewAct">View All Activity <ArrowRight  size={15}/></div>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default MainDashboard;
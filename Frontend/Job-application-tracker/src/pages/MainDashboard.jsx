import react from "react";
import {useNavigate} from "react-router-dom";
import {  Bell , CircleUser , Search , House, LayoutGrid ,SquarePlus, Bookmark, LogOut , Goal, ChartLine,Handshake , Clock9, X ,SquareText, Clock , Check, ArrowRight, MoveUp , CalendarDays } from "lucide-react";
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
                         <div>Track your job applications, stay organised , and never miss opportunity</div>
                       </div>
                        <div> <CalendarDays />Mon , 05 Oct 2026</div>
                    </div>
                   <div className="statsArrange">
                     <div className="stats1">
                        <div className="iconSize"><SquareText  style={{color:"white" , backgroundColor: "#f5b501"}}/></div>
                        <div className="App">Total Application</div>
                        <div className="App">8</div>
                        <div className="updateInStats"> <MoveUp  size={13}/> + 2 this week</div>
                    </div>
                     <div className="stats1">
                        <div className="iconSize"><SquareText  style={{color:"white" , backgroundColor: "#f5b501"}}/></div>
                        <div className="App">Total Application</div>
                        <div className="App">8</div>
                        <div className="updateInStats"> <MoveUp  size={13}/> + 2 this week</div>
                    </div>
                    <div className="stats1">
                        <div className="iconSize"><SquareText  style={{color:"white" , backgroundColor: "#f5b501"}}/></div>
                        <div className="App">Total Application</div>
                        <div className="App">8</div>
                        <div className="updateInStats"> <MoveUp  size={13}/> + 2 this week</div>
                    </div>
                    <div className="stats1">
                        <div className="iconSize"><SquareText  style={{color:"white" , backgroundColor: "#f5b501"}}/></div>
                        <div className="App">Total Application</div>
                        <div className="App">8</div>
                        <div className="updateInStats"> <MoveUp  size={13}/> + 2 this week</div>
                    </div>
                    
                   </div>
                   <div className="pt2bx3">
                    <div>Recent Applications</div>
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
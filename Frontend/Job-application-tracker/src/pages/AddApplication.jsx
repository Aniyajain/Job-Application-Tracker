import axios from "axios";
import "../pagesCSS/AddApplication.css";
// import "react-toastify/dist/ReactToastify.css";
import {
  Search,
  Bell,
  CircleUser,
  LogOut,
  Bookmark,
  SquarePlus,
  LayoutGrid,
  House,
  Goal,
  BriefcaseBusiness,
  MapPin,
  ChartNoAxesColumnIncreasing,
  IndianRupee,
  RotateCcw,
  StarCheck,
  SquareArrowOutUpRight,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import IITDLOGO from "../assets/IITDLOGO.png";
import { useState } from "react";
import {ToastContainer, toast} from "react-toastify"
function AddApplication() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [location, setLocation] = useState("Any Location");
  const [jobtype, setJobType] = useState("");
  const [experience, setExperience] = useState("Any Experience");
  const [salary, setSalary] = useState(0);
  const JobData = async()=>{
    try {
      const response = await axios.post("http://localhost:5000/jobapi/createJob" , {
        title : title,
        location : location,
        jobtype : jobtype,
        experience: experience,
        salary : salary


      });
      if(response.status == 200){
        toast.success("Data send successfully");

      }
      console.log(response.data);
      
    } catch (error) {
      if(error.response && error.response.status == 500){
        toast.error("Enter all  data correctly");
      }else{
        toast.error("something went wrong");
      }
    }

  }
  return (
    <>
    <div>
      <div className="topalignment1">
        <div className="logotitle">
          <img
            src={IITDLOGO}
            alt="loading...."
            style={{ height: "60px", width: "63px", marginTop: "8px" }}
            onClick={() => navigate("/")}
          />
          <h1>Job Application Tracker</h1>
        </div>
        <ToastContainer/>
        <div className="bell">
          <div>
            {" "}
            <input type="text" placeholder="Search Jobs , Companies.." />{" "}
            <Search size={19} />{" "}
          </div>
          <div className="user">
            <span>
              <Bell size={29} style={{ color: "#f5b501" }} />
            </span>
            <span>
              <CircleUser size={29} style={{ color: "#f5b501" }} />
            </span>
          </div>
        </div>
      </div>
      <div className="Bottom">
        <div className="pt1">
          <div>
            <div className="bt1" onClick={() => navigate("/Main")}>
              {" "}
              <House /> Dashboard
            </div>
            <div className="bt1" onClick={() => navigate("/Applications")}>
              {" "}
              <LayoutGrid />
              Application
            </div>
            <div className="bt1" onClick={() => navigate("/Add")}>
              {" "}
              <SquarePlus />
              Add Applications
            </div>
            <div className="bt1" onClick={() => navigate("/SavedJobs")}>
              {" "}
              <Bookmark />
              Saved Jobs
            </div>
            <div className="bt1" onClick={() => navigate("/Profile")}>
              {" "}
              <CircleUser />
              Profile
            </div>
            <div className="bt1" onClick={() => navigate("/Logout")}>
              {" "}
              <LogOut />
              Logout
            </div>
          </div>

          <div className="goal">
            {" "}
            <Goal size={34} />
            Small steps everyday leads to big career goals
          </div>
        </div>

        <div className="pt2">
          <div className="Headlinept2">
         
            <BriefcaseBusiness size={32} />
            Find Next Opportunity
          </div>
          <div className="Subheadingpt2">
            Search and explore the latest job openings. Apply to your dream jobs
            abd keep track of them here.
          </div>
          <div className="resultJob">
            <div className="searchDetails">
              <div className="searchJobs">Search Jobs</div>
              <input
                type="search"
                placeholder="e.g. Software Engineer , React, etc"
                onChange={(e) => setTitle(e.target.value)}
                className="dropdownCity"
              />
              <div className="rupee">
            
                <MapPin size={19} style={{ color: "black" }} />
                Location
              </div>
              <select
                className="dropdownCity"
                value={location}
                onChange={(e) => setLocation(e.target.value)}

              >
                <option value="Any Location">Any Location </option>
                <option value="Delhi">Delhi</option>
                <option value="banglore">banglore</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
                <option value="Hydrabad">Hydrabad</option>
              </select>
              <div className="rupee">
                
                <BriefcaseBusiness size={19} style={{ color: "black" }} />
                Job Type
              </div>
              <div className="jobType">
                <div className="timeJob">
                  <input
                    type="checkbox"
                    name=""
                    id="Full Time"
                    style={{ accentColor: "#f5b501" }}
                    onChange={(e) => setJobType(e.target.id)}
                  />
                  <label className="label">Full Time</label>
                </div>
                <div className="timeJob">
                  <input
                    type="checkbox"
                    name=""
                    id="Part Time"
                    style={{ accentColor: "#f5b501" }}
                    onChange={(e) => setJobType(e.target.id)}
                  />
                  <label className="label">Part Time</label>
                </div>
                <div className="timeJob">
                  <input
                    type="checkbox"
                    name=""
                    id="Internship"
                    style={{ accentColor: "#f5b501" }}
                    onChange={(e) => setJobType(e.target.id)}
                  />
                  <label className="label">Internship</label>
                </div>
                <div className="timeJob">
                  <input
                    type="checkbox"
                    name=""
                    id="Contract"
                    style={{ accentColor: "#f5b501" }}
                    onChange={(e) => setJobType(e.target.id)}
                  />
                  <label className="label">Contract</label>
                </div>
              </div>
              <div className="rupee">
                <ChartNoAxesColumnIncreasing
                  size={19}
                  style={{ color: "black" }}
                />{" "}
                Experience
              </div>
              <select
                className="dropdownCity"
                onChange={(e) => setExperience(e.target.value)} value={experience}
              >
                <option value="Any Experience">Any Experience</option>
                <option value="0-1 Years">0-1 Years</option>
                <option value="2-3 Years">2-3 Years</option>
                <option value="3-4 Years">3-4 Years</option>
                <option value="4-5 Years">4-5 Years</option>
                <option value="5 + Years">5 + Years</option>
              </select>

              <div className="rupee">
                <IndianRupee size={19} style={{ color: "black" }} /> Salary
                Range (LPA)
              </div>
              <div className="alignSalary">
                <div>
                  <input
                    type="number"
                    placeholder="Min"
                    className="MinSalary"
                    value={salary}
                    onChange={(e)=>setSalary(e.target.value)}
                  />{" "}
                </div>{" "}
                -{" "}
                <div>
                  <input
                    type="number"
                    placeholder="Max"
                    className="MinSalary"
                  />
                </div>
              </div>

              <div className="btns">
                <button className="btnReset">
                  {" "}
                  <RotateCcw />
                  Reset
                </button>
                <button className="btnSearch" onClick={JobData}>
                  
                  <Search size={19}   /> Search
                </button>
              </div>
            </div>

            <div className="allResult">
              <div className="sByside">
                <div className="titleResult">
                  Showing 10 results for{" "}
                  <span style={{ color: "#f5b501" }}>"Software Engineer"</span>
                  in <span style={{ color: "#f5b501" }}>"India"</span>{" "}
                </div>
                <div className="TimeDivisionJob">
                  <div className="sort">Sort By: </div>
                  <select className="recentJobs">
                    <option>Most Recent</option>
                    <option>Last Week</option>
                    <option> Last Month</option>
                  </select>
                </div>
              </div>
              <div className="Googlejob">
                <img
                  src="https://yt3.googleusercontent.com/r99eRlOesQkJe7pOzDY4JazAlhidoVp-0syxBnYjfeHdmUXGa5zOxcozaxKF2oPHg3RkglecZQ=s900-c-k-c0x00ffffff-no-rj"
                  alt="loading..."
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "40px",
                    marginTop: "28px",
                    marginRight: "10px",
                  }}
                />
                <div className="Software">
                  <div className="RoleName">Software Engineer</div>
                  <div className="companyName">Google</div>
                  <div className="joiningdetail">
                    <div className="iconAll">
                      {" "}
                      <MapPin size={13} /> Bangalore, India
                    </div>
                    <div className="iconAll">
                      {" "}
                      <BriefcaseBusiness size={13} /> Full Time
                    </div>
                    <div className="iconAll">
                      <StarCheck size={13} />
                      0-2 Yrs
                    </div>
                  </div>
                  <div className="jobdescript">
                    Work on scalable systems and help build products used by
                    billions..
                  </div>
                </div>
                <div>
                  <div
                    className="iconAll"
                    style={{
                      color: "#f5b501",
                      fontWeight: "600",
                      marginTop: "20px",
                      fontSize: "20px",
                      marginLeft: "70px",
                    }}
                  >
                    <IndianRupee size={13} />
                    12L - 20L
                  </div>
                  <div
                    style={{
                      color: "#5B7690",
                      fontWeight: "600",
                      margin: "10px",
                      marginLeft: "70px",
                    }}
                  >
                    Posted 1 Day ago
                  </div>
                  <div className="btnAlign">
                    <button className="btnSave">
                      {" "}
                      <Bookmark />
                      Save
                    </button>
                    <button className="btnApply">
                      Apply Now <SquareArrowOutUpRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="Googlejob">
                <img
                  src="https://play-lh.googleusercontent.com/mlWjVjxflQoYJHBBgDQ08FqT8i3KnDG__2RH8P-GWOKlEPAIo8TllTZo3HDQ3J5zlO6oAhc1FAv0Bf2on0wL8w=s256-rw"
                  alt="loading..."
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "40px",
                    marginTop: "28px",
                    marginRight: "10px",
                  }}
                />
                <div className="Software">
                  <div className="RoleName">Software Engineer</div>
                  <div className="companyName">Google</div>
                  <div className="joiningdetail">
                    <div className="iconAll">
                      {" "}
                      <MapPin size={13} /> Bangalore, India
                    </div>
                    <div className="iconAll">
                      {" "}
                      <BriefcaseBusiness size={13} /> Full Time
                    </div>
                    <div className="iconAll">
                      <StarCheck size={13} />
                      0-2 Yrs
                    </div>
                  </div>
                  <div className="jobdescript">
                    Work on scalable systems and help build products used by
                    billions..
                  </div>
                </div>
                <div>
                  <div
                    className="iconAll"
                    style={{
                      color: "#f5b501",
                      fontWeight: "600",
                      marginTop: "20px",
                      fontSize: "20px",
                      marginLeft: "70px",
                    }}
                  >
                    <IndianRupee size={13} />
                    12L - 20L
                  </div>
                  <div
                    style={{
                      color: "#5B7690",
                      fontWeight: "600",
                      margin: "10px",
                      marginLeft: "70px",
                    }}
                  >
                    Posted 1 Day ago
                  </div>
                  <div className="btnAlign">
                    <button className="btnSave">
                      {" "}
                      <Bookmark />
                      Save
                    </button>
                    <button className="btnApply">
                      Apply Now <SquareArrowOutUpRight />
                    </button>
                  </div>
                </div>
              </div>
              <div className="AllAppli">
                <div style={{ fontWeight: "bold" }}>
                  Showing 1-5 of 5 applications
                </div>
                <div>
                  <button className="leftbtn">
                    <ChevronLeft size={14} />
                  </button>
                  <span className="pageNo">1</span>
                  <button className="rightbtn">
                    <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default AddApplication;

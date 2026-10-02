import React from "react";
import IITDLOGO from "../assets/IITDLOGO.png";
import "../pagesCSS/Loginpage.css";
import applicationTracker from "../assets/application tracker main page.jpeg";
import { ChevronDown, Bookmark, Lightbulb, CircleGauge } from "lucide-react";
import { useNavigate } from "react-router-dom";
import SignupPage from "./SigupPage";

function LoginPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="topalignment">
        <div className="logotitle">
          <img
            src={IITDLOGO}
            alt="loading...."
            style={{ height: "60px", width: "63px", marginTop: "8px" }}
          onClick={()=> navigate("/")} />
          <h1>Job Application Tracker</h1>
        </div>
        <div className="lognbtn">
          <div id="AIRESUME">
            AI Resume Builder <ChevronDown size={16} />
          </div>
          <div id="TOOL">
            Tools <ChevronDown size={16} />
          </div>
        </div>
        <div className="lognbtn">
          <div id="signbtn" onClick={() => navigate("/signup")}>
            Signup
          </div>
          <div id="login" onClick={()=> navigate("/createacc")}>Login</div>
        </div>
      </div>
      <div className="img">
        <div>
          <h1 className="content">Track & Organize Your Job Search</h1>
          <p className="para">
            The leading tool for organizing, tracking, and managing all of your
            job applications in one place.
          </p>
          <div className="Keypoints">
            <div className="bold">
              {" "}
              <Bookmark size={19} style={{ color: "#F5B501" }} />
              Save jobs throughout your search
            </div>
            <p className="lightpara">A fast, convenient way to bookmark jobs</p>
            <span className="bold">
              {" "}
              <Lightbulb size={19} style={{ color: "#F5B501" }} />
              Track & organize job opportunities by stage
            </span>
            <p className="lightpara">
              Keep a high level view of your job search pipeline
            </p>
            <p className="bold">
              {" "}
              <CircleGauge size={19} style={{ color: "#F5B501" }} />
              Get job description insights
            </p>
            <div className="lightpara">
              View rich keyword & skill insights for every job
            </div>
          </div>
          <div className="Signup" onClick={()=> navigate("/signup")}>SignUp - its 100% free! </div>
        </div>
        <div>
          <img
            src={applicationTracker}
            alt="loading...."
            style={{
              width: "730px",
              height: "400px",
              boxShadow: "6px 3px 4px black",
              borderRadius: "20px",
              marginTop: "40px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

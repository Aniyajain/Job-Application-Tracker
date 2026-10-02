import react from "react";
import IITDLOGO from "../assets/IITDLOGO.png";
import "../pagesCSS/CreateAccount.css";
import { useNavigate } from "react-router-dom";

function CreateAccount(){
    const navigate = useNavigate();
    return(
        <div>
             <div className="logotitle2">
                          <img
                            src={IITDLOGO}
                            alt="loading...."
                            style={{ height: "60px", width: "63px", marginTop: "8px" }}
                          onClick={()=> navigate("/")} />
                          <h1>Job Application Tracker</h1>
                        </div>
            <div className="details">
                <div className="emailwithpass">Build a resume that lands more interviews </div>
                <input type="email" className="emailinput" placeholder="Email"  />
                <br />
                <input type="password" className="emailInput" placeholder="Password"  />

                <div className="getStart">Sign In</div>
                <div className="forget">Forget Password</div>
<div className="forget">or Sign In with these providers</div>
<div className="google"> <img src="https://images.rapidload-cdn.io/spai/ret_blank,q_lossless,to_avif,w_460,h_460/https://estateandprobatelawyer.com/wp-content/uploads/2025/05/Google-2025-G-logo.webp" alt="loading..." style={{width: "30px" , height: "24px" , borderRadius: "50%"}} />Continue with Google </div>
    <div className="Linkedin"> <img src="https://th.bing.com/th/id/OIP.NN_29U5mI6l_KAfhsxQksgHaHa?w=179&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" alt="loading..." style={{width: "30px" , height: "24px" , borderRadius: "50%"}}  />Continue with LinkedIn </div>
    <div>Not a member Yet ? <span style={{ color:"#f5b501"}} onClick={()=> navigate("/signup")}>Create Account</span></div>
            </div>

        </div>
    )
}
export default CreateAccount;
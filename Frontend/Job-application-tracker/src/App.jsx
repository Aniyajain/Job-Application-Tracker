import react from "react";
import { Routes , Route} from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SigupPage";
import MainDashboard from "./pages/MainDashboard";

function App(){
    return (
        
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/createacc" element={<CreateAccount/>}/>
            <Route path="/Main" element={<MainDashboard/>}/>
        </Routes>
      
    )
}
export default App;
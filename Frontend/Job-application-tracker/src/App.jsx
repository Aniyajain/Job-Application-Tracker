import react from "react";
import { Routes , Route} from "react-router-dom";
import CreateAccount from "./pages/CreateAccount";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SigupPage";

function App(){
    return (
        
        <Routes>
            <Route path="/" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/createacc" element={<CreateAccount/>}/>
        </Routes>
      
    )
}
export default App;
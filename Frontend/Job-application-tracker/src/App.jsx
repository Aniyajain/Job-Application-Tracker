import react from "react";
import { Routes , Route} from "react-router-dom";
import Login from "./pages/Login";
import InterfacePage from "./pages/InterfacePage";
import CreateSignUp from "./pages/CreateSignUp";
import MainDashboard from "./pages/MainDashboard";

function App(){
    return (
        
        <Routes>
            <Route path="/" element={<InterfacePage/>}/>
            <Route path="/signup" element={<CreateSignUp/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/Main" element={<MainDashboard/>}/>
        </Routes>
      
    )
}
export default App;
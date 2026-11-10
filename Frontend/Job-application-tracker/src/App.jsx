import react from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import InterfacePage from "./pages/InterfacePage";
import CreateSignUp from "./pages/CreateSignUp";
import MainDashboard from "./pages/MainDashboard";
import AddApplication from "./pages/AddApplication";
import Application from "./pages/Application";
import Logout from "./pages/Logout";
import Profile from "./pages/Profile";
import SavedJobs from "./pages/SavedJobs";
function App() {
  return (
    <Routes>
      <Route path="/" element={<InterfacePage />} />
      <Route path="/signup" element={<CreateSignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/Main" element={<MainDashboard />} />
      <Route path="/Add" element={<AddApplication />} />
      <Route path="/Applications" element={<Application />} />
      <Route path="/Logout" element={<Logout />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/SvaedJobs" element={<SavedJobs />} />
    </Routes>
  );
}
export default App;

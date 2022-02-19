import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Login from "../components/Login/Login";
import Home from "../components/Home/Home";
import Profile from "../components/Profile/Profile";

  const AppRouter = () => {
      
    return (
        <Router>
            <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            <Route path="/Profile" element={<Profile/>} />
            </Routes>
        </Router>
    );
  }

  export default AppRouter;
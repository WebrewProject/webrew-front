import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

import Login from "../components/Login/Login";
import Home from "../components/Home/Home";

  const AppRouter = () => {
      
    return (
        <Router>
            <Routes>
           
            <Route path="/login" element={<Login/>} />
            <Route path="/" element={<Home/>} />
            
            </Routes>
        </Router>
    );
  }

  export default AppRouter;
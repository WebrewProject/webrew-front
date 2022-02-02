import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Navbar/Navbar";
import HomeBrand from "./HomeBrand";

class Home extends React.Component {

    render() {
        return (
        <>
            <NavBar></NavBar>
            <HomeBrand></HomeBrand>
        </>
        )
        
    }
}

export default Home;
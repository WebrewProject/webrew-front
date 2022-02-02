import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../Navbar/Navbar";
import HomeBrand from "./HomeBrand";
import HomeFooter from "./HomeFooter";

class Home extends React.Component {

    render() {
        return (
        <>
            <NavBar></NavBar>
            <HomeBrand></HomeBrand>
            <HomeFooter></HomeFooter>
        </>
        )
        
    }
}

export default Home;
import React from "react";
import Estudios from "./components/Estudios";
import Intro from "./components/Intro";
import Proyectos from "./components/Proyectos";
import SobreMi from "./components/SobreMi";
import CustomNavbar from "./components/CustomNavbar";
import "./App.css";

function App (){
    return(
        <div className="App">
            <CustomNavbar></CustomNavbar>
            <div className="content">
                <Intro></Intro>
                <SobreMi></SobreMi>
                <Estudios></Estudios>
                <Proyectos></Proyectos>
            </div>
        </div>
    );
}

export default App;
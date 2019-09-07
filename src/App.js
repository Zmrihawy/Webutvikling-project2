import React from 'react';
import './stylesheets/navbar.css'
import NavbarMedia from "./components/navbar/Navbarmedia";             /* Navbar styles */
import "@fortawesome/fontawesome-free/css/all.min.css";  /* Font-awesome = must run => npm install --save-dev @fortawesome/fontawesome-free*/

function App() {
    return (
        <div className="App">

            <div className="navbar">
                <NavbarMedia categories={["Color", "Art", "Animation"]}>Picture</NavbarMedia>
                <NavbarMedia categories={["Example1", "Example2", "Example3"]}>Sounds</NavbarMedia>
                <NavbarMedia categories={["Type1", "Type2", "Type3"]}>Text</NavbarMedia>
                <div className="container"><i className="far fa-star"/></div>
            </div>

        </div>
    );
}

export default App;

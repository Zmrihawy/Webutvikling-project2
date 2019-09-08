import NavbarMedia from "./Navbarmedia";
import React from "react";


function Navbar() {
    return (
        <div className="_inner_navbar">
            <NavbarMedia categories={["Color", "Art", "Animation"]}>Picture</NavbarMedia>
            <NavbarMedia categories={["Example1", "Example2", "Example3"]}>Sounds</NavbarMedia>
            <NavbarMedia categories={["Type1", "Type2", "Type3"]}>Text</NavbarMedia>
            <div className="container"><i className="far fa-star"/></div>
        </div>
    )
}

export default Navbar;
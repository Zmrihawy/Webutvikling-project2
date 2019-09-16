import NavbarMedia from "./Navbarmedia";
import React from "react";


function Navbar(props) {
    return (
        <div className="_inner_navbar">
            <NavbarMedia categories={["Color", "Art", "Animation"]} changeFunc={props.setPicture}>Picture</NavbarMedia>
            <NavbarMedia categories={["Example1", "Example2", "Example3"]} changeFunc={props.setSound}>Sounds</NavbarMedia>
            <NavbarMedia categories={["Type1", "Type2", "Type3"]} changeFunc={props.setText}>Text</NavbarMedia>
            <div className="container"><i className="far fa-star"/></div>
        </div>
    )
}

export default Navbar;
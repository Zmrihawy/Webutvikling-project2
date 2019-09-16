import NavbarMedia from "./Navbarmedia";
import React from "react";


function Navbar(props) {
    console.log(props)
    return (
        <div className="_inner_navbar">
            <NavbarMedia categories={["color", "art", "animation"]} changeFunc={props.setPicture} ownState={props.globalState.picture}>Picture</NavbarMedia>
            <NavbarMedia categories={["Example1", "Example2", "Example3"]} changeFunc={props.setSound} ownState={props.globalState.sounds}>Sounds</NavbarMedia>
            <NavbarMedia categories={["Type1", "Type2", "Type3"]} changeFunc={props.setText} ownState={props.globalState.text}>Text</NavbarMedia>
            <div className="container"><i className="far fa-star"/></div>
        </div>
    )
}

export default Navbar;
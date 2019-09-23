import NavbarMedia from "./Navbarmedia";
import React from "react";
import Checkbox from "../buttons/Checkbox";


function Navbar(props) {
    return (
        <div className="_inner_navbar">
            <NavbarMedia categories={["cubes", "shapes", "spirals"]} changeFunc={props.setPicture} ownState={props.globalState.picture}>Picture</NavbarMedia>
            <NavbarMedia categories={["romance", "deep", "wild"]} changeFunc={props.setSound} ownState={props.globalState.sounds}>Sounds</NavbarMedia>
            <NavbarMedia categories={["boring", "funny", "random"]} changeFunc={props.setText} ownState={props.globalState.text}>Text</NavbarMedia>
            <div className="container">
                <h3>FAVOURITES</h3>
                {/*<i className="far fa-star"/>*/}
                <Checkbox name=" make_favourite"
                          changeFunc={props.setFavourites}
                          ownState={props.globalState.others} />
            </div>
        </div>
    )
}

export default Navbar;

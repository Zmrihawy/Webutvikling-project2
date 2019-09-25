import NavbarMedia from "./Navbarmedia";
import React from "react";
import Favourites from '../buttons/Favourites';


function Navbar(props) {
    return (
        <div className="_inner_navbar">
            <NavbarMedia categories={["cubes", "shapes", "spirals"]} changeFunc={props.setPicture} ownState={props.globalState.picture}>Picture</NavbarMedia>
            <NavbarMedia categories={["romance", "deep", "wild"]} changeFunc={props.setSound} ownState={props.globalState.sounds}>Sounds</NavbarMedia>
            <NavbarMedia categories={["boring", "funny", "random"]} changeFunc={props.setText} ownState={props.globalState.text}>Text</NavbarMedia>
            <div className="favorites-outer-container">
                <Favourites setFavourites={props.setFavourites} ownState={props.globalState}>FAVOURITES</Favourites>
            </div>
        </div>
    )
}

export default Navbar;

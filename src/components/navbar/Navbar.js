import React, {Component} from 'react'
import NavbarMedia from "./Navbarmedia";

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titles: ["Picture", "Sound", "Text"]
        }
    }

    render() {

        return (
            <div className="row">
                {this.state.titles.map((Item, index) => <NavbarMedia title={Item} key={index}/>)}
            </div>
        )
    }
}

export default Navbar;
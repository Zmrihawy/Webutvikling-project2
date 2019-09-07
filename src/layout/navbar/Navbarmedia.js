import React, { Component } from 'react'
import Checkbox from "./Checkbox";

class NavbarMedia extends Component {
    constructor(props) {
        super(props);

        this.state = {
            Categories: ["Category 1", "Category 2", "Category 3"]
        }

    }

    render() {

        const {title} = this.props;

        return (
            <div className="container">

                {title ? <h3>{title}</h3> : "" }

                {this.state.Categories.map((Item, index) => <Checkbox name={Item} key={index}/> )}

            </div>
        )
    }
}

export default NavbarMedia;
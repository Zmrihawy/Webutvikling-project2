import React, { Component } from 'react'
import Checkbox from "../buttons/Checkbox";

class NavbarMedia extends Component {

    render() {

        const {categories} = this.props;    /* A list of categories */

        return (
            <div className="container">

                <h3>{this.props.children}</h3>
                {categories.map(( Item, index) => <Checkbox name={Item} key={index} changeFunc={this.props.changeFunc}/> )}

            </div>
        )
    }
}

export default NavbarMedia;

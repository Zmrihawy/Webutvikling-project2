import React, { Component } from "react";

class Checkbox extends Component {

    render() {

        const {name} = this.props;

        return (

            <label htmlFor={name} className="label-container">
                <input type="checkbox" name={name}/>
                {name}
            </label>

        )
    }

}

export default Checkbox;
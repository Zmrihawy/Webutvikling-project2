import React, { Component } from "react";

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
       this.props.changeFunc({[this.props.name]: e.target.checked});
    }

    render() {

        const {name} = this.props;

        return (

            <label htmlFor={name} className="label-container">
                <input type="checkbox" name={name} onChange={this.handleChange}/>
                {name}
            </label>

        )
    }

}

export default Checkbox;
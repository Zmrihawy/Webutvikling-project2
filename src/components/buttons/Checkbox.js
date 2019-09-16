import React, { Component } from "react";

class Checkbox extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {

        let categoryObjs = {}
        Object.keys(this.props.ownState).forEach(key => {
            categoryObjs[key] = false })


       this.props.changeFunc({...categoryObjs, ...{[this.props.name]: e.target.checked}});

    }
    // disable}{
    render() {

        const { name, ownState } = this.props;

        return (

            <label htmlFor={name} className="label-container">
                <input type="checkbox" name={name} checked={ownState[name]} onChange={this.handleChange}
                />
                {name}
            </label>

        )
    }

}

export default Checkbox;
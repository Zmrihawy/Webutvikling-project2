import React, { Component } from "react";

class Checkbox extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let categoryObjs = {};
    Object.keys(this.props.ownState).forEach(key => {
      categoryObjs[key] = false;
    });
    this.props.changeFunc({
      ...categoryObjs,
      ...{ [this.props.name]: e.target.checked }
    });
  }

  render() {
    const { name, ownState } = this.props;
    return (
      <div className="checkbox">
        <input
          type="checkbox"
          id={name}
          checked={ownState[name]}
          onChange={this.handleChange}
        />
        <label htmlFor={name} className="label-container">
          {name}
        </label>
      </div>
    );
  }
}

export default Checkbox;

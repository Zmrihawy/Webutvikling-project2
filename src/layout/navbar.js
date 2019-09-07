import React, {Component} from 'react'

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

export default Navbar;
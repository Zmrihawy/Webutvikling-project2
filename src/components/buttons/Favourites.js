import React, {Component} from 'react'

import '../../stylesheets/favorites.css';

class Favourites extends Component{
    constructor(props) {
      super(props);
      this.state = {favoriteName: ""};
      this.handleMakeFavoriteChange = this.handleMakeFavoriteChange.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }


    handleMakeFavoriteChange() {
      const { favoriteName } = this.state;
      if (favoriteName == "") {
        alert("Please set a name for favorite");
        return;
      }
      let currCombs = JSON.parse(localStorage.getItem("combinations"));
      if (currCombs === null || currCombs === undefined) {
        currCombs = [{favoriteName, ...this.props.ownState}]
      } else {
        let duplicate = false;
        currCombs.forEach(comb => {
          if (comb.favoriteName === favoriteName) {
            duplicate = true;
            alert("name already exists in list");
          }
        })
        if (duplicate) {
          return;
        }
        currCombs.push({favoriteName, ...this.props.ownState});
      }
      localStorage.setItem("combinations", JSON.stringify(currCombs));
      this.setState({favoriteName: ""});
    }


    handleChange(e) {
      this.setState({favoriteName: e.target.value});
    }

    handleChooseFavorite(name) {
      const { setFavourites } = this.props;

      if (name === "none") {
        setFavourites({ chosenFavorite: null })
        return
      }

      let currCombs = JSON.parse(localStorage.getItem("combinations"));
      let chosenComb = null;
      currCombs.forEach(comb => {
        if (comb.favoriteName === name) {
          chosenComb = comb;
        }
      });
      setFavourites({ chosenFavorite: chosenComb })

      }
      

      

    render() {
        let currCombs = JSON.parse(localStorage.getItem("combinations"));
        console.log(currCombs);
        let mappedCombs = <div>no favorites saved yet</div>
        
        if (currCombs !== null) {
          mappedCombs = currCombs.map((x) => (
            <a href="#" key={x.favoriteName} onClick={() => this.handleChooseFavorite(x.favoriteName)}>{x.favoriteName}</a>
          ))
        }
        
        return(
            <div className="favorites-container">
              <button className="make-fav-btn" onClick={this.handleMakeFavoriteChange}>make_fav</button>
              <form >
                <label>
                  Name:
                  <input type="text" value={this.state.favoriteName} onChange={this.handleChange} />
                </label>
              </form>
              <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                  <a href="#" onClick={() => this.handleChooseFavorite("none")}>None</a>
                  {mappedCombs}
                </div>
              </div>
            </div>
        )
    }

}

export default Favourites

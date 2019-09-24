import React, {Component} from 'react'

import '../../stylesheets/favorites.css';

class Favourites extends Component{
    constructor(props) {
      super(props);
    }


    handleMakeFavoriteChange() {
      const { setFavourites } = this.props;
    }
      

    render() {
        return(
            <div className="favorites-container">
              <button className="make-fav-btn" onChange>make_fav</button>
              <div className="dropdown">
                <button className="dropbtn">Dropdown</button>
                <div className="dropdown-content">
                  <a href="#">Link 1</a>
                  <a href="#">Link 2</a>
                  <a href="#">Link 3</a>
                </div>
              </div>
            </div>
        )
    }

}

export default Favourites

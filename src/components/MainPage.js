import React, { Component } from "react";
import Navbar from "./navbar/Navbar";
import MediaContainer from "./MediaContainer";

class MainPage extends Component {
  // Initial state of the app is set here
  constructor(props) {
    super(props);
    this.state = {
      picture: {
        cubes: false,
        shapes: false,
        spirals: false
      },

      sounds: {
        romance: false,
        deep: false,
        wild: false
      },

      text: {
        boring: false,
        funny: false,
        random: false
      },

      others: {
        make_favourite: false,
        toggleFavourites: false,
        currentFavourites: [],
        chosenFavorite: null
      },

      combinations: {
        picture: [0, 1, 2, 3],
        sounds: [0, 1, 2, 3],
        text: [0, 1, 2, 3]
      }
    };

    this.setPicture = this.setPicture.bind(this);
    this.setText = this.setText.bind(this);
    this.setSound = this.setSound.bind(this);
    this.setFavourites = this.setFavourites.bind(this);
    this.setCombinations = this.setCombinations.bind(this);
  }

  // Callback functions for sending down the component tree
  setPicture(New) {
    this.setState({ picture: { ...this.state.picture, ...New } });
  }

  setText(New) {
    this.setState({ text: { ...this.state.text, ...New } });
  }

  setSound(New) {
    this.setState({ sounds: { ...this.state.sounds, ...New } });
  }

  setFavourites(New) {
    this.setState({ others: { ...this.state.others, ...New } });
  }

  setCombinations(New) {
    this.setState({ combinations: { ...this.state.combinations, ...New } });
  }

  render() {
    return (
      <div className="MainPage">
        <div className="heading">
          <h1> Art gallery </h1>
          <h3> Project 2 - Group 30 </h3>
        </div>
        <div className="Navbar">
          <Navbar
            setPicture={this.setPicture}
            setText={this.setText}
            setSound={this.setSound}
            setFavourites={this.setFavourites}
            globalState={this.state}
          />
        </div>
        <MediaContainer
          globalState={this.state}
          setCombinations={this.setCombinations}
        />
      </div>
    );
  }
}

export default MainPage;

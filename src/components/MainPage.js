import React, {Component} from 'react';

import Navbar from './navbar/Navbar';
import Slideshow from './slideshow/Slide';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: {
                color: false,
                art: false,
                animation: false
            }, 

            sounds: {
                example1: false,
                example2: false,
                example3: false,
            },

            text : {
                type1: false,
                type2: false,
                type3: false,
            },

            others: {
                favourites: false,
                toggleFavourites: false
            }
        };

        this.setPicture = this.setPicture.bind(this);
        this.setText = this.setText.bind(this);
        this.setSound = this.setSound.bind(this);
        this.setFavourites = this.setFavourites.bind(this);
    }


    // Example:
    // setPicture({Color: true})
    setPicture(New) {
        this.setState({picture: {...this.state.picture, ...New}})
    }
    
    setText(New) {
        this.setState({picture: {...this.state.text, ...New}})
    }

    setSound(New) {
        this.setState({picture: {...this.state.sounds, ...New}})
    }

    setFavourites(New) {
        this.setState({picture: {...this.state.others, ...New}})
    }

render() {
    
    return (
        <div className="MainPage">
            <div className="Navbar">
                <Navbar 
                    setPicture={this.setPicture} 
                    setText={this.setText} 
                    setSound={this.setSound} 
                    setFavourites={this.setFavourites}
                    globalState={this.state}
                />
            </div>
            <div className="Slideshow">
                <Slideshow/>
            </div>
        </div>
    )
}
}


export default MainPage;
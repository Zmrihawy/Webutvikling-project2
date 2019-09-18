import React, {Component} from 'react';

import Navbar from './navbar/Navbar';
import Slideshow from './slideshow/Slide';
import TextDisplayContainer from './text/TextDisplayContainer';

class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            picture: {
                decoration: false,
                art: false,
                animation: false
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
        this.setState({text: {...this.state.text, ...New}})
    }

    setSound(New) {
        this.setState({sounds: {...this.state.sounds, ...New}})
    }

    setFavourites(New) {
        this.setState({others: {...this.state.others, ...New}})
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
            <div className="TextDisplay" style={{marginTop: "50px"}}>
              <TextDisplayContainer textState={this.state.text}/>
            </div>
        </div>
    )
}
}


export default MainPage;

import React, { Component } from 'react';


import TextDisplay from './TextDisplay';

const funnyURL = 'it2810-30.idi.ntnu.no/media/txt/funny.json'
const boringURL = 'it2810-30.idi.ntnu.no/media/txt/boring.json'
const randomURL = 'https://corporatebs-generator.sameerkumar.website/'

class TextDisplayContainer extends Component {

  constructor(props) {
    super(props);
    // Need to seperate fields here since the form of the fetch response for them are different.
    this.state = {
      text: "",
      randomText: ""
    }
  }

  componentDidMount() {
    const { textState } = this.props;  
    let keys = Object.keys(textState).filter(key => (
      textState[key]));
    let URL = "";
    if (keys.length === 1) {
      switch(keys[0]) {
        case "funny":
          URL = funnyURL;
          break;
        case "boring": 
          URL = boringURL;
          break;
        case "random":
          URL = randomURL;
          break;
      }
      fetch(URL)
        .then(res => res.json())
        .then(res => (this.setState({randomText: res.phrase})))
    }
  }

  componentDidUpdate(prevProps) {
    const { textState, combinationState } = this.props;  
    if (prevProps.textState !== textState || prevProps.combinationState !== combinationState) {
      const keys = Object.keys(textState).filter(key => (
        textState[key]));
      let URL = "";
      if (keys.length === 1) {
        switch(keys[0]) {
          case "funny":
            URL = funnyURL;
            break;
          case "boring": 
            URL = boringURL;
            break;
          case "random":
            URL = randomURL;
            break;
        }
        fetch(URL)
          .then(res => res.json())
          .then(res => {
            if (keys[0] === "random") {
              this.setState({randomText: res.phrase})
            } else {
              this.setState({text: res.phrase})
            }
          }) 
      }
    }
  }

  render() {
    const { textState, combinationState } = this.props;  
    const { text, randomText } = this.state;
    let showText = "";
    const keys = Object.keys(textState).filter(key => (
      textState[key]));
    if (keys.length > 1) {
      console.log("Critical error! Active text is more than one. This should never happen.")
    }

    if (keys.length !== 0 && combinationState !== null) {
      if (keys[0] === "random") {
        showText = randomText; 
      } else {
        showText = text[combinationState];
      }
    }

    return (
    <div>
      <TextDisplay text={showText}/>
    </div>
    )
  }
}

export default TextDisplayContainer;

import React, { Component } from 'react';
import texts from '../../media/txt/texts.json';

import TextDisplay from './TextDisplay';

class TextDisplayContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      randomText: ""
    }
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  componentDidMount() {
    const { textState } = this.props;  
    let keys = Object.keys(textState).filter(key => (
      textState[key]));
    if (keys.length == 1 && keys[0] == "random") {
      fetch("https://corporatebs-generator.sameerkumar.website/")
        .then(res => res.json())
        .then(res => (this.setState({randomText: res.phrase})))
    }
  }

  componentDidUpdate(prevProps) {
    const { textState } = this.props;  
    if (prevProps.textState !== textState) {
      let keys = Object.keys(textState).filter(key => (
        textState[key]));
      if (keys.length == 1 && keys[0] == "random") {
        fetch("https://corporatebs-generator.sameerkumar.website/")
          .then(res => res.json())
          .then(res => (this.setState({randomText: res.phrase})))
      }
    }
  }

  render() {
    const { textState } = this.props;  
    const { randomText } = this.state;
    let text = "";
    let keys = Object.keys(textState).filter(key => (
      textState[key]));
    if (keys.length > 1) {
      console.log("Critical error! Active text is more than one. This should never happen.")
    }

    if (keys.length != 0) {
      if (keys[0] == "random") {
        text = randomText; 
      } else {
        text = texts[keys[0]][this.getRandomInt(4)];
      }
    }

    return (
    <div>
      <TextDisplay text={text}/>
    </div>
    )
  }
}

export default TextDisplayContainer;

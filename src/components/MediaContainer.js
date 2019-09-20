import React, { Component } from 'react';

import PictureDisplayContainer from './picture/PictureDisplayContainer';
import TextDisplayContainer from './text/TextDisplayContainer';

import '../stylesheets/mediacontainer.css'

class MediaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.calculateCombinations(4, 4),
      text: this.calculateCombinations(4, 4),
      sound: this.calculateCombinations(4, 4),
      currentIndex: 0
    }
    this.handleLeftChange = this.handleLeftChange.bind(this);
    this.handleRightChange = this.handleRightChange.bind(this);
  }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  // Create array of numToChoose distinct random numbers, from numbers in range numToChooseFrom
  // example: 
  //    numToChoose = 4, numToChooseFrom = 10 might result in [2,7,0,8]
  calculateCombinations(numToChoose, numToChooseFrom) {
    if (numToChooseFrom > numToChoose) {
      console.log("Error! numToChooseFrom larger than numToChoose. Should never happen")
    }
    // Create array of numbers from 0 to numToChooseFrom
    const arr = Array.from(Array(numToChooseFrom).keys())
    const res = []
    // move random element from arr to res, numToChoose times
    for (let i = 0; i < numToChoose; i++) {
      res.push(arr.splice(this.getRandomInt(arr.length), 1)[0])
    }
    return res;
  }

  componentDidUpdate(prevProps) {
    const prevGlobalState = prevProps.globalState;
    const { globalState } = this.props;
    const { picture, text, sound } = this.state;

    // If props have changes, calc new value for just that combination state
    if (globalState !== prevGlobalState) {
      this.setState({ 
        picture: globalState.picture !== prevGlobalState.picture ? this.calculateCombinations(4, 4) : picture,
        text: globalState.text !== prevGlobalState.text ? this.calculateCombinations(4, 4) : text,
        sound: globalState.sound !== prevGlobalState.sound ? this.calculateCombinations(4, 4) : sound
      })
    }
  }

  handleLeftChange() {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: currentIndex <= 0 ? 3 : currentIndex - 1
    })
  }

  handleRightChange() {
    const { currentIndex } = this.state;
    this.setState({
      currentIndex: currentIndex >= 3 ? 0 : currentIndex + 1
    })
  }

  render() {
    const { globalState } = this.props;
    const { picture, text, sound, currentIndex } = this.state;
    return(
      <div className="mediacontainer-root"> 
        <button onClick={this.handleLeftChange} className="leftButton"> Left </button>
        <button onClick={this.handleRightChange} className="rightButton"> Right </button>
        <div className="Slideshow">
            <PictureDisplayContainer pictureState={globalState.picture} combinationState={picture[currentIndex]}/>
        </div>
        <div className="TextDisplay" style={{marginTop: "50px"}}>
          <TextDisplayContainer textState={globalState.text} combinationState={text[currentIndex]}/>
        </div>
      </div>
    )
  }
}


export default MediaContainer;

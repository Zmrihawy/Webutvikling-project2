import React, { Component } from 'react';

import PictureDisplayContainer from './picture/PictureDisplayContainer';
import TextDisplayContainer from './text/TextDisplayContainer';
import SoundPlayer from './sound/SoundPlayer';

import '../stylesheets/mediacontainer.css'

class MediaContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      picture: this.calculateCombinations(4, 4),
      text: this.calculateCombinations(4, 4),
      sound: this.calculateCombinations(4, 4),
      currentIndex: 0
    };

    const { setCombinations } = props;
    setCombinations({picture: this.state.picture, sounds: this.state.sound, text: this.state.text });

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
    const arr = Array.from(Array(numToChooseFrom).keys());
    const res = [];
    // move random element from arr to res, numToChoose times
    for (let i = 0; i < numToChoose; i++) {
      res.push(arr.splice(this.getRandomInt(arr.length), 1)[0])
    }
    return res;
  }

  // These functions are pretty dumb, they dont take into account if obj2 is larger
  // But they should suffice for our purposes
  isStateObjectEqual(obj1, obj2) {
    var isEqual = true;
    Object.keys(obj1).forEach(globKey => {
      Object.keys(obj1[globKey]).forEach(key => {
        if(obj1[globKey][key] !== obj2[globKey][key]) {
          isEqual = false;
        }
      })
    })
    return isEqual;
  }
  isSimpleObjectEqual(obj1, obj2) {
    var isEqual = true;
    Object.keys(obj1).forEach(globKey => {
      if(obj1[globKey] !== obj2[globKey]) {
        isEqual = false;
      }
    })
    return isEqual;
  }
    

  componentDidUpdate(prevProps) {
    const prevGlobalState = prevProps.globalState;
    const { globalState, setCombinations } = this.props;
    const { picture, text, sound } = this.state;

    const trimmedGlobalState = {picture: globalState.picture, sounds: globalState.sounds, text: globalState.text}
    const trimmedPrevGlobalState = {picture: prevGlobalState.picture, sounds: prevGlobalState.sounds, text: prevGlobalState.text}

    // If props have changes, calc new value for just that combination state
    if (!this.isStateObjectEqual(trimmedGlobalState, trimmedPrevGlobalState)) {
      const newPicComb = this.calculateCombinations(4, 4);
      const newSoundComb = this.calculateCombinations(4, 4);
      const newTextComb = this.calculateCombinations(4, 4);
      this.setState({ 
        picture: !this.isSimpleObjectEqual(globalState.picture, prevGlobalState.picture) ? newPicComb : picture,
        text: !this.isSimpleObjectEqual(globalState.text, prevGlobalState.text) ? newSoundComb : text,
        sound: !this.isSimpleObjectEqual(globalState.sound !== prevGlobalState.sound) ? newTextComb : sound
      })
      setCombinations({picture: newPicComb, sounds: newSoundComb, text: newTextComb});
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
    let globalPicture = globalState.picture;
    let globalSound = globalState.sounds;
    let globalText = globalState.text;
    let combinations = globalState.combinations;
    let chosenFavorite = globalState.others.chosenFavorite;
    let { picture, text, sound, currentIndex} = this.state;

    // If user has chosen a favorite other than none, override random
    // values and set to favorite values
    if (chosenFavorite != null) {
      globalPicture = chosenFavorite.picture;
      globalSound = chosenFavorite.sound;
      globalText = chosenFavorite.text;
      picture = chosenFavorite.combinations.picture;
      sound = chosenFavorite.combinations.sound;
      text = chosenFavorite.combinations.text;
    }

    return(
      <div className="mediacontainer-root">
        <button onClick={this.handleLeftChange} className="leftButton"><i className="fas fa-angle-left" /></button>
        <button onClick={this.handleRightChange} className="rightButton"><i className="fas fa-angle-right" /></button>
        <div className="Slideshow">
            <PictureDisplayContainer pictureState={globalPicture} combinationState={picture[currentIndex]}/>
        </div>
        <div className="TextDisplay" style={{marginTop: "50px"}}>
          <TextDisplayContainer textState={globalText} combinationState={text[currentIndex]}/>
        </div>
        <div className="SoundPlayer" style={{marginTop: "50px"}}>
          <SoundPlayer soundState={globalSound} combinationState={sound[currentIndex]}/>
        </div>
      </div>
    )
  }
}


export default MediaContainer;

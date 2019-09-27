import React, { Component } from "react";

import romance1 from "../../media/sound/romantic/2016-10-25_-_Lovers_-_David_Fesliyan.mp3";
import romance2 from "../../media/sound/romantic/2018-07-02_-_Tears_of_Joy_-_David_Fesliyan.mp3";
import romance3 from "../../media/sound/romantic/2019-05-10_-_Fireside_Date_-_www.fesliyanstudios.com.mp3";
import romance4 from "../../media/sound/romantic/RomanticMusic2018-11-11_-_Tender_Love_-_David_Fesliyan.mp3";

import deep1 from "../../media/sound/Deep/deep-horn.mp3";
import deep2 from "../../media/sound/Deep/deep-wobble.mp3";
import deep3 from "../../media/sound/Deep/drop-into-deep-long.mp3";
import deep4 from "../../media/sound/Deep/welcome-to-this-podcast.mp3";

import wild1 from "../../media/sound/wild/Cowboy_Theme-Pavak-1711860633.mp3";
import wild2 from "../../media/sound/wild/Nature-sounds-birds.mp3";
import wild3 from "../../media/sound/wild/Night_Sounds_-_Crickets-Lisa_Redfern-591005346.mp3";
import wild4 from "../../media/sound/wild/thunder_strike_3-Mike_Koenig-853886140.mp3";

const sounds = {
  romance: [romance1, romance2, romance3, romance4],

  deep: [deep1, deep2, deep3, deep4],

  wild: [wild1, wild2, wild3, wild4]
};

class SoundPlayer extends Component {
  constructor(props) {
    super(props);
    const { soundState } = props;
    const filteredSoundState = Object.keys(soundState).filter(
      key => soundState[key]
    );
    if (filteredSoundState.length > 1) {
      console.log("ERROR! Soundstate not recogniced, more than one");
    }
  }

  componentDidMoune() {
    this.player.play();
  }

  componentDidUpdate() {
    const { soundState, combinationState } = this.props;
    const filteredSoundState = Object.keys(soundState).filter(
      key => soundState[key]
    );
    if (filteredSoundState.length > 1) {
      console.log("ERROR! Soundstate not recogniced, more than one");
    }
    if (filteredSoundState.length > 0) {
      this.player.src = sounds[filteredSoundState[0]][combinationState];
      this.player.play();
    }
  }

  render() {
    return <audio ref={ref => (this.player = ref)} />;
  }
}

export default SoundPlayer;

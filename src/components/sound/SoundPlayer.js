import React, { Component } from "react";

import romance1 from "../../media/sound/romantic/Lovers-David-Fesliyan.mp3";
import romance2 from "../../media/sound/romantic/Tears-Of-Joy.mp3";
import romance3 from "../../media/sound/romantic/Fireside-Date.mp3";
import romance4 from "../../media/sound/romantic/Tender-Love-David-Fesliyan.mp3";

import deep1 from "../../media/sound/Deep/Deep-Horn.mp3";
import deep2 from "../../media/sound/Deep/Deep-Wobble.mp3";
import deep3 from "../../media/sound/Deep/Drop-Into-Deep-Long.mp3";
import deep4 from "../../media/sound/Deep/Welcome-To-This-Podcast.mp3";

import wild1 from "../../media/sound/wild/Cowboy-Theme-Pavak.mp3";
import wild2 from "../../media/sound/wild/Nature-Sounds-Birds.mp3";
import wild3 from "../../media/sound/wild/Night-Sounds-Crickets.mp3";
import wild4 from "../../media/sound/wild/Thunder-Strike.mp3";

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

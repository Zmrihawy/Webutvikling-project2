import React, { Component } from 'react';

// import romance1 from '../../media/


class SoundPlayer extends Component {



  render() {
    return (
      <audio ref={ref => this.player = ref} />
    )
  }
}

export default SoundPlayer;

import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import audio from '../media/audio.mp3';

class Audio extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="center">Audio:</h3>
        <div className="row">
        <ReactAudioPlayer
          className="col l8 offset-l2 s12 card-panel hoverable"
          src={audio}
          controls
        />
        </div>
        
      </div>
    )
  }
}

export default Audio

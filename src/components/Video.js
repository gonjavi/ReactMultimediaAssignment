import React, { Component } from 'react';
import { Player } from 'video-react';
import  video from '../media/video.mp4';

class Video extends Component {
  render() {
    return (
      <div className="container">
        <h3 className="center">Video:</h3>
        <div className="row">
          <Player 
            className="col l8 offset-l2 card-panel hoverable"
            playsInline
            src={video}
          />
        </div>
      </div>
    )
  }
}

export default Video;

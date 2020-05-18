import React, { Component } from 'react';
import { Player } from 'video-react';
import  video from '../media/video.mp4';
import MediaQuery from 'react-responsive'

class Video extends Component {

  render() {
    return (
      <div className="container">
        <h3 className="center">Video:</h3>
        <div className="row">
          <Player             
            className="col l8 offset-l2 s12 offset-s2 card-panel hoverable"
            width='65%' 
            height={380}
            fluid={false}
            playsInline
            src={video}
          />           
        </div>
      </div>
    )
  }
}

export default Video;

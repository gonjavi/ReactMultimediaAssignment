import React, { Component } from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';


class Noticia extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col l8 offset-l2 card-panel hoverable">
             <TwitterTimelineEmbed
              sourceType="profile"
              screenName="UniversidadUNAD"
              options={{height: 400}}
            />
          </div>
        </div>        
      </div>
    )
  }
}

export default Noticia;

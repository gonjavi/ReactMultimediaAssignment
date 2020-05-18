import React, { Component } from 'react'
import img1 from '../media/fotoed2.png';

class ArticuloPublicitario extends Component {
  render() {
    return (
      <div className="container">
        
        <h3 className="center">Incripciones Abiertas:</h3>
        <div className="row">
          <h5 className="col l8 offset-l2 card-panel hoverable">Las incripciones se encuentran abiertas a nivel nacional, si deseas información llama el numero: 018000-115223 </h5>
        </div>
        <div className="row">
          <img src={img1} alt="unad" width="60" className="col l8 offset-l2 s12 card-panel hoverable" /> 
        </div>
      </div>
    )
  }
}

export default ArticuloPublicitario;

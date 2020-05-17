import React, { Component } from 'react'
import logo from '../media/logo.png';

class NavBar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper  blue lighten-3">
            <a href={logo} className="brand-logo center">ESTUDIA EN LA UNAD</a>
              
          </div>
        </nav>
      </div>
    )
  }
}

export default NavBar;

import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import './Footer.css'
export class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar style={{ backgroundColor: 'black' }} className="navbar" >
          <div className='navbar-container'>
            <p className='navbar-logo'> CaptureIt </p>
          </div>

        </Navbar>

      </div >
    );
  }
}

export default Footer;

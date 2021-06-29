import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import Loginbutton from './Loginbutton';
import Logoutbtn from './Logoutbtn';
import { withAuth0 } from '@auth0/auth0-react';



export class Header extends Component {
  render() {
    const { isAuthenticated } = this.props.auth0;
    return (


      <div>
        <Navbar className="navbar" >
          {/* <Navbar.Brand href="#home">photographer</Navbar.Brand> */}
          {/* <img src='public/Logo_Captureit_bw.png' style={{}} /> */}
          {/* <Nav.Link href="/">Home</Nav.Link> */}

          <div className='navbar-container' >
            <p className='navbar-logo'>
              CaptureIt

            </p>
            <div className='nav-links'>

              <Link style={{ textDecoration: "none", color: '#fff' }} to="/">
                Home
              </Link>


              {isAuthenticated && <Link style={{ textDecoration: "none", color: '#fff' }} to="/myphotos">My Photos</Link>}
              <Link style={{ textDecoration: "none", color: '#fff' }} to="/Environment">Environment</Link>
              <Link style={{ textDecoration: "none", color: '#fff' }} to="/AboutUs">About Us</Link>


            </div>
            {isAuthenticated ? <Logoutbtn /> : <Loginbutton />}
          </div>
          



        </Navbar>
      </div>
    );
  }
}

export default withAuth0(Header);



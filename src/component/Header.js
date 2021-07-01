import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import Loginbutton from './Loginbutton';
import Logoutbtn from './Logoutbtn';
import { withAuth0 } from '@auth0/auth0-react';
import logo from "./pics/logo.png"


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
           <img style={{  height:"85%" }}src={logo}></img>
            <div className='nav-links'>

              <Link style={{ textDecoration: "none", color: '#fff' }} to="/">
                Home
              </Link>


              { isAuthenticated&& <Link style={{ textDecoration: "none", color: '#fff' }} to="/myfavourite">My Favourite</Link>}
              {isAuthenticated && <Link style={{ textDecoration: "none", color: '#fff' }} to="/myphotos">My Photos</Link>}
              { isAuthenticated&&  <Link style={{ textDecoration: "none", color: '#fff' }}to="/Community">Community</Link>}
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
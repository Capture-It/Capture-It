import React, { Component } from "react";
import { Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";
import Loginbutton from './Loginbutton';
import Logoutbtn from './Logoutbtn';
import { withAuth0 } from '@auth0/auth0-react';



export class Header extends Component {
  render() {
      const {isAuthenticated }=this.props.auth0;
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">photographer</Navbar.Brand>

          {/* <Nav.Link href="/">Home</Nav.Link> */}
          <Link className="title" to="/">
            Home
          </Link>
         { isAuthenticated&& <Link to="/myphotos">My Photos</Link>}
          <Link to="/Environment">Environment</Link>
          <Link to="/AboutUs">About Us</Link>
         
   
       {isAuthenticated ? <Logoutbtn />:<Loginbutton />}
       {/* <Loginbutton />
       <Logoutbtn /> */}
     
       

       
        </Navbar>
      </div>
    );
  }
}

export default withAuth0(Header);



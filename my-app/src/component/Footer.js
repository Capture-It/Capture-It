import React, { Component } from "react";
import { Navbar } from "react-bootstrap";

export class Footer extends Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand>photographer</Navbar.Brand>
        </Navbar>
      </div>
    );
  }
}

export default Footer;

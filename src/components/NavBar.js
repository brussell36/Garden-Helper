import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function NavBar(props) {

  return (
    <React.Fragment>
      <Navbar style={{ backgroundColor: "#7ea04d", boxShadow: "0 5px 15px rgba(0, 0, 0, .5)",}} sticky="top" expand="lg">
        <Navbar.Brand href="/">Garden Helper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/signup'>Sign-up</Nav.Link>
            <Nav.Link href="/signin">Sign-in</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href='/signout'>Sign-out</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default NavBar;
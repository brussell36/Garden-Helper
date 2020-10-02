import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SignOut from './Account/SignOut';
import { withAuthContext } from './Session/index';

function NavBar(props) {
  const {authUser} = props;

  const accountLink = authUser ? <Nav className='mr-auto'><SignOut /></Nav> : <Nav.Link href='/login' className='mr-auto'>Log In</Nav.Link>;

  return (
    <React.Fragment>
      <Navbar style={{ backgroundColor: "#7ea04d", boxShadow: "0 5px 15px rgba(0, 0, 0, .5)",}} sticky="top" expand="lg">
        <Navbar.Brand href="/">Garden Helper</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href='/signup'>Sign-up</Nav.Link>
          </Nav>
          <Nav>
            {accountLink}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}

export default withAuthContext(NavBar);
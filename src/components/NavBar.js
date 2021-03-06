import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import SignOut from './Account/SignOut';
import { withAuthContext } from './Session/index';
import logo from "./img/sprout.png";

function NavBar(props) {
  const {authUser} = props;

  const userName = authUser ? <Nav.Link className='mr-auto' href='/profile'>{authUser.displayName}</Nav.Link> : null;
  const accountLink = authUser ? <Nav className='mr-auto'><SignOut /></Nav> : <Nav.Link href='/account' className='mr-auto'>Log In</Nav.Link>;

  return (
    <Navbar style={{ backgroundColor: "#7ea04d", boxShadow: "0 5px 15px rgba(0, 0, 0, .5)",}} sticky="top" expand="lg">
      <Navbar.Brand href="/">
        <img 
          alt='Logo' 
          width='40' 
          height='35' 
          className='d-inline-block align-top' 
          src={logo} />{' '}
        Garden Helper
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href='/search-plants'>Search Plants</Nav.Link>
          <Nav.Link href='/saved'>Saved Plants</Nav.Link>
        </Nav>
        <Nav>
          {userName}
          {accountLink}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default withAuthContext(NavBar);
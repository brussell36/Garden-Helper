import React from 'react';
import SignUp from './SignUp';
import LogIn from './LogIn';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

function AccountControl() {
  return (
    <React.Fragment>
      <CardDeck>
        <Card>
          <Card.Header><Card.Title as='h4'>Create Account</Card.Title></Card.Header>
          <Card.Body><SignUp /></Card.Body>
        </Card>
        <Card>
          <Card.Header><Card.Title as='h4'>Log In To Your Account</Card.Title></Card.Header>
          <Card.Body>
            <LogIn />
            <a href='/forgot-password'>I forgot my password!</a>
          </Card.Body>
        </Card>
      </CardDeck>
    </React.Fragment>
  )
}

export default AccountControl;
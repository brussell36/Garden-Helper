import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import './../css/Account.css';

function LogIn(props) {
  const history = useHistory();
  const [logEmail, setLogEmail] = useState('');
  const [logPassword, setLogPassword] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = event => {
    event.preventDefault();
    props.firebase
      .doSignInWithEmailAndPassword(logEmail, logPassword)
      .then(() => {
        setLogEmail('');
        setLogPassword('');
        setError(null);
        history.push('/');
      })
      .catch(error => { setError(error)});
  }

  const isInvalid = logPassword === '' || logEmail === '';

  return (
    <Container className='login-container'>
      <h1>Log In</h1>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId="logEmail">
          <Form.Control
            type='text'
            placeholder='Email Address'
            value={logEmail}
            onChange={event=>setLogEmail(event.target.value)} />
        </Form.Group>
        <Form.Group controlId="logPassword">
          <Form.Control
            type='password'
            placeholder='Password'
            value={logPassword}
            onChange={event=>setLogPassword(event.target.value)} />
        </Form.Group>
        <Button type='submit' variant='secondary' disabled={isInvalid}>Log In</Button>
        {error && error.message}
      </Form>
    </Container>
  )
}

export default withFirebase(LogIn);
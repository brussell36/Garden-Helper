import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withFirebase } from './../Firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

function PasswordChange(props) {
  const history = useHistory();
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState('');

  const isInvalid = password1 !== password2 || password1 === '';

  const onSubmit = event => {
    event.preventDefault();
    props.withFirebase
      .doPasswordUpdate(password1)
      .then(() => {
        setPassword1('');
        setPassword2('');
        history.push('/');
      })
      .catch(error => setError(error));
  }

  return(
    <Container className='login-container'>
      <h2>Change your Password</h2>
      <Form onSubmit={onSubmit}>
        <Form.Group controlId='password1'>
          <Form.Control
            type='password'
            placeholder='New Password'
            value={password1}
            onChange={event=>setPassword1(event.target.value)} />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='password'
            placeholder='Confirm Password'
            value={password2}
            onChange={event=>setPassword2(event.target.value)} />
        </Form.Group>
        <Button type='submit' variant='dark' disabled={isInvalid}>Update Password</Button>
        {error && error.message}
      </Form>
    </Container>
  )
}

export default withFirebase(PasswordChange);
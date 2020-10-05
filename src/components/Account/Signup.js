import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function SignUp(props) {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [error, setError] = useState(null);

  const isInvalid = password1 !== password2 || password1 === '' || email === '' || username === '';

  const onSubmit = event => {
    event.preventDefault();
    props.firebase
      .doCreateUserWithEmailAndPassword(email, password1)
      .then(result => result.user.updateProfile({displayName: username}))
      .then(() => {
        setUsername('');
        setEmail('');
        setPassword1('');
        setPassword2('');
        setError(null);
        history.push("/");
      })
      .catch(error => setError(error));
  }

  return (
      <Form onSubmit={onSubmit}>
        <Form.Group controlid='signupUsername'>
          <Form.Control 
            type='text' 
            placeholder='User Name'
            value={username}
            onChange={event => setUsername(event.target.value) } />
        </Form.Group>
        <Form.Group controlId='signupEmail'>
          <Form.Control 
            type='text' 
            placeholder='Email'
            value={email}
            onChange={event => setEmail(event.target.value)} />
        </Form.Group>
        <Form.Group controlId='signupPassword'>
          <Form.Control 
            type='password' 
            placeholder='Password'
            value={password1}
            onChange={event => setPassword1(event.target.value)} />
        </Form.Group>
        <Form.Group controlId='signupPassword2'>
          <Form.Control 
            type='password' 
            placeholder='Confirm Password'
            value={password2}
            onChange={event => setPassword2(event.target.value)} />
        </Form.Group>
        <Button type='submit' variant='primary' disabled={isInvalid}>Sign Up</Button>

        {error && <p>{error.message}</p>}
      </Form>
  );
}

export default withFirebase(SignUp);
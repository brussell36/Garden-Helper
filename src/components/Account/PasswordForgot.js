import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { withFirebase } from '../Firebase';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import '../css/Account.css';

function PasswordForgot(props) {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [error, setError] = useState(null);

  const onSubmit = (event) => {
    event.preventDefault();
    props.firebase.doPasswordReset(email)
      .then(() => {
        setEmail('');
        setError(null);
        history.push('/account');
      })
      .catch(error => setError(error));
  }

  return(
    <Container className='login-container'>
      <Form onSubmit={onSubmit}>
        <Form.Group>
          <h1>Reset your Password</h1>
          <Form.Control
            type='text'
            onChange={event => setEmail(event.target.value)}
            value={email}
            placeholder='Email Address' />
        </Form.Group>
        <Button type='submit' variant='primary'>Reset My Password</Button>
        {error && <p>{error.message}</p>}
      </Form>
    </Container>
  );
}

export default withFirebase(PasswordForgot);
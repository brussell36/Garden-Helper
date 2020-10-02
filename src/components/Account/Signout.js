import React from 'react';
import { useHistory } from 'react-router-dom';
import { withFirebase } from './../Firebase';
import Button from 'react-bootstrap/Button';

function SignOut(props) {
  const history = useHistory();

  const onClick = () => {
    props.firebase.doSignOut();
    history.push('/');
  }

  return (
    <Button type='button' variant='alert' onClick={onClick}>Log Out</Button>
  )
}

export default withFirebase(SignOut);
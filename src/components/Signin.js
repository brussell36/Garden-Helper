import React from "react";
import firebase from "firebase/app";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function SignIn() {
  
  let history = useHistory();

  function doSignIn(event) {
    event.preventDefault();
    const email = event.target.signinEmail.value;
    const password = event.target.signinPassword.value;
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Successfully signed in!");
        history.push("/");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }

  return(
    <React.Fragment>
      <Header />
      <Container>
        <h1>Sign In</h1>
        <Form onClick={doSignIn}>
          <Form.Group>
            <Form.Control type='text' name='signInEmail' placeholder='Email' />
          </Form.Group>
          <Form.Group>
            <Form.Control type='password' name='password' placeholder='Password' />
          </Form.Group>
          <Button type='submit' variant='primary'>Sign In</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
}

export default SignIn;
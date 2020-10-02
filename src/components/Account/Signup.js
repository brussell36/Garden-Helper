import React from "react";
import firebase from "firebase/app";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";

function SignUp() {
  function doSignUp(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then(function () {
        console.log("Successfully signed up!");
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }
  return (
    <React.Fragment>
      <Container className="container">
        <h1>Sign Up</h1>
        <Form onSubmit={doSignUp}>
          <Form.Group>
            <Form.Control type="text" name="email" placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Sign up
          </Button>
        </Form>
      </Container>
    </React.Fragment>
  );
}

export default SignUp;
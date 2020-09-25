import React from "react";
import firebase from "firebase/app";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import { useHistory } from "react-router-dom";
import Header from "./Header";

function SignOut() {

  let history = useHistory();

  function doSignOut() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        console.log("Successfully signed out!");
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
        <h1>Sign Out</h1>
        <h3>If you are sure you want to sign out click here:</h3>
        <Form onClick={doSignOut}>
          <Button type='submit' variant='warning'>Sign Out</Button>
        </Form>
      </Container>
    </React.Fragment>
  );
}

export default SignOut;
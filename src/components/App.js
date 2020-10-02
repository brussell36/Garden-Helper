import React, { useState } from 'react';
import { withFirebase } from './Firebase';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PlantControl from './PlantControl';
import AuthUserContext from './Session';

function App(props) {
  const [authUser, setAuthUser] = useState(null);

  props.firebase.auth.onAuthStateChanged(function(user) {
    if(user) {
      setAuthUser(user);
    } else {
      setAuthUser(null);
    }
  })

  return (
    <AuthUserContext.Provider value={authUser}>
      <PlantControl />
    </AuthUserContext.Provider>
  );
}

export default withFirebase(App);

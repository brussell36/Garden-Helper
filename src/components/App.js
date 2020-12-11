import React, { useState } from 'react';
import { withFirebase } from './Firebase';
import './../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import LandingPage from './LandingPage/LandingPage';
import AccountControl from './Account/AccountControl';
import PasswordForgot from './Account/PasswordForgot';
import Profile from './Account/Profile';
import NewPlantForm from './NewPlantForm';
import AuthUserContext from './Session';
import UserPlantList from './UserPlantList';

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
      <Router>
        <NavBar />
        <Switch>
          <Route path='/' exact>
            <LandingPage />
          </Route>
          <Route path='/account'>
            <AccountControl />
          </Route>
          <Route path='/forgot-password'>
            <PasswordForgot />
          </Route>
          <Route path='/profile'>
            <Profile />
          </Route>
          <Route path='/search-plants'>
            <NewPlantForm />
          </Route>
          <Route path='/saved'>
            <UserPlantList />
          </Route>
        </Switch>
      </Router>
    </AuthUserContext.Provider>
  );
}

export default withFirebase(App);

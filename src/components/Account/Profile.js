import React from 'react';
import PasswordChange from './PasswordChange';
import withAuthorization from './../Session/withAuthorization';

function Profile() {
  return(
    <React.Fragment>
      <h4>Change your Password</h4>
      <PasswordChange />
    </React.Fragment>
  )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Profile);
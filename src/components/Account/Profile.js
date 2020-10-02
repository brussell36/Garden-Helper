import React from 'react';
import PasswordChange from './PasswordChange';
import withAuthorization from './../Session/withAuthorization';

function Profile() {
  return(
    <React.Fragment>
      <PasswordChange />
    </React.Fragment>
  )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Profile);
import React from 'react';
import PasswordChange from './PasswordChange';
import withAuthorization from './../Session/withAuthorization';

function Profile() {
  return(
    <PasswordChange />
  )
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(Profile);
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withFirebase } from './Firebase';
import withAuthorization from './Session/withAuthorization';
import { compose } from 'recompose';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from 'react-bootstrap/Button';

function AddPlant(props) {
  const { db } = props.firebase;
  const { plant } = props;
  const [user, setUser] = useState(null);

  useEffect(() => props.firebase.auth.onAuthStateChanged(function(user){
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }), [props.firebase.auth]);

  const addPlant = () => {
    db.collection(user.email).doc(plant.idPlant).set({
      key: plant.idPlant,
      commonName: plant.commonName,
      latinName: plant.latinName,
      imgUrl: plant.imgUrl,
      sun: plant.sun,
      water: plant.water,
      soil: plant.soil,
      description: plant.description
    });
  }

  return(
    <>
      <Button variant='none' type='button' onClick={addPlant}><FontAwesomeIcon className='heart' icon={faHeart} size='2x' /></Button>
    </>
  );
}

AddPlant.propTypes = {
  plant: PropTypes.object
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(AddPlant);
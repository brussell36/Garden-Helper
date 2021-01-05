import React, { useReducer, useEffect, useState } from 'react';
import { withFirebase } from './Firebase';
import withAuthorization from './Session/withAuthorization';
import { compose } from 'recompose';
import Plant from './Plant';
import CardColumns from 'react-bootstrap/CardColumns';
import Container from 'react-bootstrap/Container';

const reducer = (state, action) => {
  switch(action.type) {
    case 'add_plant':
      const newPlants = [...state.plants, action.plant];
      return {...state, plants: newPlants};
    default:
      return state;
  }
}

function UserPlantList(props) {

  const [state, dispatch] = useReducer(reducer, {plants: []});
  const [user, setUser] = useState(null);

  useEffect(() => props.firebase.auth.onAuthStateChanged(function(user){
    if (user) {
      setUser(user);
    } else {
      setUser(null);
    }
  }), []);
  
  useEffect(() => {
    if (user) {
      props.firebase.db.collection(user.email).get()
        .then(querySnapshot => {
          const plants = querySnapshot.docs.map(doc => doc.data());
          plants.map(plant => dispatch({type: 'add_plant', plant}));
        })
    }
  }, [user]);
  
  const display = (
    <CardColumns>
      {state.plants.map((plant) => {
        return (
          <Plant
            plant={plant}
            comonName={plant.commonName}
            latinName={plant.latinName}
            imgUrl={plant.imgUrl}
            sun={plant.sun}
            water={plant.water}
            soil={plant.soil}
            description={plant.description}
            key={plant.idPlant}
          />
        );
      })}
    </CardColumns>
  );


  return (
    <Container className='login-container'>
      {display}
    </Container>
  )
}

const condition = authUser => !!authUser;

export default compose(
  withFirebase,
  withAuthorization(condition)
)(UserPlantList);
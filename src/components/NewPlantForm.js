import React, { useReducer, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import { withFirebase } from './Firebase';
import Plant from './Plant';

const reducer = (state, action) => {
  switch(action.type) {
    case 'add_plant':
      const newPlants = [...state.plants, action.plant];
      return {...state, plants: newPlants};
    default:
      return state;
  }
}

function NewPlantForm(props) {
  // const [plant, setPlant] = useState(null);
  const [state, dispatch] = useReducer(reducer, {plants: []});
  let display = null;

  useEffect(() => {
    props.firebase.db.collection('plants').get()
      .then(querySnapshot => {
        const plants = querySnapshot.docs.map(doc => doc.data());
        plants.map(plant => dispatch({type: 'add_plant', plant}));
        console.log(plants);
      })
  }, [props.firebase.db])

  function onSubmitForm(event) {
    event.preventDefault();
    const sunValue = event.target.sun.value;
    const waterValue = event.target.water.value;
    const soilValue = event.target.soil.value;
    
  }
  
  display = <CardColumns>
      {state.plants.map((plant) => {
        return(
          <Plant
            commonName={plant.commonName}
            latinName={plant.latinName}
            imgUrl={plant.imgUrl}
            sun={plant.sun}
            water={plant.water}
            soil={plant.soil}
            description={plant.description} />
        )
        })}
    </CardColumns>


  return(
    <Container className='login-container'>
      <h1>Plant List</h1>
      <Form onSubmit={onSubmitForm}>
        <Form.Group controlId='sun'>
          <Form.Label>Choose Sun</Form.Label>
          <Form.Control as='select' name='sun'>
            <option></option>
            <option>Full-sun</option>
            <option>Part-sun</option>
            <option>Shade</option>
          </Form.Control> 
        </Form.Group>
        <Form.Group controlId='water'>
          <Form.Label>Choose Water</Form.Label>
          <Form.Control as='select' name='water'>
            <option></option>
            <option>Low</option>
            <option>Medium</option>
            <option>High</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId='soil'>
          <Form.Label>Choose Soil</Form.Label>
          <Form.Control as='select' name='soil'>
            <option></option>
            <option>Well-drained</option>
            <option>Loam</option>
            <option>Clay</option>
          </Form.Control>
        </Form.Group>
        <Button type='submit' variant='success'>Get Plants!</Button>
      </Form>
      <hr />
      {display}
    </Container>
  );
}

export default withFirebase(NewPlantForm);
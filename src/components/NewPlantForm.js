import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import CardColumns from 'react-bootstrap/CardColumns';
import { firestore } from 'firebase';
import { withFirebase } from './Firebase'
import Plant from './Plant';

function NewPlantForm() {
  const onSubmitForm = async (event) => {
    event.preventDefault();
    const sunValue = event.target.sun.value;
    const waterValue = event.target.water.value;
    const soilValue = event.target.soil.value;
    let snapshot;

    if(sunValue !== null){
      snapshot = await firestore.collection('plants').where('sun', '===', sunValue).get();
    } else if (waterValue !== null) {
      snapshot = await firestore.collection('plants').where('water', '===', waterValue).get();
    } else if (soilValue !== null) {
      snapshot = await firestore.collection('plants').where('soil', '===', soilValue).get();
    }
  }

  const plant = snapshot.docs.map(doc => {
    const documentId = doc.id;
    const plantObj = {documentId, ...doc.data()};
    return plantObj;
  })

  let display = <>
    <CardColumns>
      {onSubmitForm.map((plant) => {
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
    </CardColumns></>

  return(
    <>
      <Container>
        <h1>Plant List</h1>
        <Form onSubmit={onSubmitForm}>
          <Form.Group>
            <Form.Label>Choose Sun</Form.Label>
            <Form.Control as='select'>
              <option></option>
              <option>Full-sun</option>
              <option>Part-sun</option>
              <option>Shade</option>
            </Form.Control> 
          </Form.Group>
          <Form.Group>
            <Form.Label>Choose Water</Form.Label>
            <Form.Control as='select'>
              <option></option>
              <option>Low</option>
              <option>Medium</option>
              <option>High</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Choose Soil</Form.Label>
            <Form.Control as='select'>
              <option></option>
              <option>Rock</option>
              <option>Loam</option>
              <option>Clay</option>
            </Form.Control>
          </Form.Group>
          <Button type='submit' variant='success'>Get Plants!</Button>
        </Form>
        {display}
      </Container>
    </>
  )
}

export default withFirebase(NewPlantForm);
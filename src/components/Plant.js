import React from 'react';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';

function Plant(props) {
  return(
    <>
      <Card>
        <Card.Img variant='top'src={props.imgUrl} />
        <Card.Body>
          <Card.Title>{props.commonName}</Card.Title>
          <Card.Subtitle>{props.latinName}</Card.Subtitle>
          <Card.Text>Sun: {props.sun}</Card.Text>
          <Card.Text>Water: {props.water}</Card.Text>
          <Card.Text>Soil: {props.soil}</Card.Text> 
          <Card.Text>Description: {props.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

Plant.propTypes = {
  imgUrl: PropTypes.string,
  commonName: PropTypes.string,
  latinName: PropTypes.string,
  sun: PropTypes.string,
  water: PropTypes.string,
  soil: PropTypes.string,
  description: PropTypes.string
}

export default Plant;
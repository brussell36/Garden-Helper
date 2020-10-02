import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faTint } from '@fortawesome/free-solid-svg-icons';
import { faSeedling } from '@fortawesome/free-solid-svg-icons';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './../css/Features.css';

function Features() {
  return(
    <React.Fragment>
      <div className='features-section'>
        <Container>
          <Row>
            <Col className='col-lg-4'>
              <FontAwesomeIcon className='features-icon' icon={faSun} size='5x' />
              <h4>Choose how much sun.</h4>
              <p>Search plants by shade tolerant, part sun, or full sun.</p>
            </Col>
            <Col className='col-lg-4'>
              <FontAwesomeIcon className='features-icon' icon={faTint} size='5x' />
              <h4>Choose how much water.</h4>
              <p>Search based on drought tolerance, needing a little water, or watering often.</p>
            </Col>
            <Col className='col-lg-4'>
              <FontAwesomeIcon className='features-icon' icon={faSeedling} size='5x' />
              <h4>Choose your type of soil.</h4>
              <p>Do you have clay-like soil, or do you have a more rocky well-drained type?</p>
            </Col>
          </Row>
        </Container>

      </div>
    </React.Fragment>
  );
}

export default Features;
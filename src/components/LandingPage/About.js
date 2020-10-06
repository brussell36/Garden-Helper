import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


function About() {
  return(
    <div className='about-section'>
      <Container className='about-container'>
        <h1 className='about-h1'>About This Site</h1>
        <Row>
          <Col className='col-md-6 about-col'>
            <p>This site was designed to help people new to gardening figure out what kind of plants would be ideal for their climate and gardening ability. When the user selects the amount of sun their yard receives, how much water they get or how much they like to water, and what their soil is like, they will get back a list of plants that should match their criteria.</p>
          </Col>
          <Col className='col-md-6 about-col'>
            <Image className='about-img' src='https://images-na.ssl-images-amazon.com/images/I/918HS-mKyzL._AC_SL1500_.jpg' />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About;
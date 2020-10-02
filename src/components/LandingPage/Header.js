import React from 'react';
import './../css/Header.css';
import Container from 'react-bootstrap/Container';

function Header() {
  return(
    <React.Fragment>
      <div className='title-section'>
        <Container className='title-container'>
          <h1 className='title'>Garden Helper</h1>
          <h3 className='under-title'>Find new and interesting plants to fit your garden.</h3>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default Header;
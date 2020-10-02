import React from 'react';
import './../css/Header.css';

function Header() {
  return(
    <React.Fragment>
      <div className='title-section'>
        <h1 className='title'>Garden Helper</h1>
        <h3 className='under-title'>Find new and interesting plants to fit your garden.</h3>
      </div>
    </React.Fragment>
  );
}

export default Header;
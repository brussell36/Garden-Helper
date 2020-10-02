import React from 'react';
import './css/Header.css';

function Header() {
  return(
    <React.Fragment>
      <div className='title-section'>
        <h1>Garden Helper</h1>
        <h3>Find new and interesting plants to fit your garden. Search by amount of sun your garden gets, or by how much it rains in your area, and what type of soil you have.</h3>
      </div>
    </React.Fragment>
  );
}

export default Header;
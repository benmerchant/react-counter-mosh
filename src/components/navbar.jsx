import React, { Component } from 'react';

// Stateless Functional Component
const Navbar = (props) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Ben Merchant React App #000
        </a>

        <span className='badge badge-pill bg-secondary'>
          {props.totalCounters}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;

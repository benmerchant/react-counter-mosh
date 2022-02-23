import React from 'react';

// Stateless Functional Component
const Navbar = ({ totalCounters }) => {
  console.log('Navbar - MOUNT - render()');
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='http://localhost:3000'>
          Ben Merchant React App #000
        </a>
        <span className='badge badge-pill bg-secondary'>{totalCounters}</span>
      </div>
    </nav>
  );
};

export default Navbar;

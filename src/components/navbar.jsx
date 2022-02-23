import React, { Component } from 'react';

// Stateless Functional Componenet
// cant get to work ^^^

class Navbar extends Component {
  state = {};
  render() {
    return (
      <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
        <div className='container-fluid'>
          <a className='navbar-brand' href='#'>
            Ben Merchant React App #000
          </a>

          <span className='badge badge-pill bg-secondary'>
            {this.props.totalCounters}
          </span>
        </div>
      </nav>
    );
  }
}

export default Navbar;

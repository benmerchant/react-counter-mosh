import React, { Component } from 'react';

class Counter extends Component {
  state = {
    count: 0,
    tags: [],
  };

  // renderTags() {
  //   if (this.state.tags.length === 0) return <p>There are no tags</p>;
  //   return (
  //     <ul>
  //       {this.state.tags.map((tag) => (
  //         <li key={tag}>{tag}</li>
  //       ))}
  //     </ul>
  //   );
  // }

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  handleIncrement() {
    console.log('Increment Clicked', this.state.count);
  }

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={this.handleIncrement}
          className='btn btn-secondary btn-sm'
        >
          Increment
        </button>
        {/* {this.state.tags.length === 0 && 'Please create a new tag!'}
        {this.renderTags()} */}
      </React.Fragment>
    );
  }

  getBadgeClasses() {
    let classes = 'badge m-2 bg-';
    classes += this.state.count === 0 ? 'danger' : 'primary';
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
}

export default Counter;

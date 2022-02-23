import './App.css';
import Navbar from './components/navbar';
import Counters from './components/counters'
import React, { Component } from 'react';


class App extends Component {
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 4 },
      { id: 3, value: 8 },
      { id: 4, value: 15 },
      { id: 5, value: 16 },
      { id: 6, value: 23 },
      { id: 7, value: 42 },
    ],
  };

  // constructor() {
  //   super();
  //   console.log('App - MOUNT - constructor()');
  // }

  // componentDidMount() {
  //   console.log('App - MOUNT - componentDidMount()');
  //   // AJAX call
  //   // this.setState({ data })
  // }

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };

  handleDelete = counterId => {
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters });
  };

  handleIncrement = counter => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleAdd = () => {
    const counters = [...this.state.counters]; 
    const newCounterId = counters.length + 1;
    const newCounter = { id: newCounterId, value: 0 };
    counters.push(newCounter);
    this.setState({ counters })
  }
  render() {
    // console.log('App - MOUNT - render()');
    return (
      <div className="App">
        <Navbar totalCounters={this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
            onAdd = {this.handleAdd}
          />
        </main>
      </div>
    );
  }
}

export default App;

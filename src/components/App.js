import React, { Component } from 'react';
import '../App.css';
import FilterableGallery from './FilterableGallery';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h1 className="App-title">React Photo Gallery</h1>
        </div>
        <div className="App-body container">
          <FilterableGallery />
        </div>
      </div>
    );
  }
}

export default App;

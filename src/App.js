import './App.css';
//podstrony
import Home from './pages/Home'

import React, { Component } from 'react';
import {movies, halls, seances} from './data'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      seances: seances,
      movies: movies,
      halls: halls
     }
  }

  addSeance = (seance) => {
    this.setState({
      seances: seance
    })
}

  addMovie = (movie) => {
    this.setState({
      movies: movie
    })
  }

  addHall = (hall) => {
    this.setState({
      halls: hall
    })
  }


  render() { 
    return ( 
      <div>
      <Home addHall = {this.addHall} addMovie = {this.addMovie} addSeance = {this.addSeance} seances = {this.state.seances} movies={this.state.movies} 
      halls={this.state.halls}/>
      </div>
     );
  }
}
 
export default App;


// function App() {
//   return (
//     <Home/>
//   );
// }

// export default App;

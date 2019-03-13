import React, { Component } from 'react';
import './App.css';
import MovieList from './Components/MovieList';
import SearchBar from './Components/SearchBar';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      searchfield: ''
    };
  }

  componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=e6e7d5a6c82910bdea89f63db4fc07b8&language=en-US&page=1')
    .then(result => result.json())
    .then((data) => {
      console.log(data.results);
        this.setState({ movies: data.results });
    });
}

onSearchChange = (e) => {
  this.setState({ searchfield: e.target.value });
}


render() {
  const { movies, searchfield } = this.state;

  const filteredMovies = movies.filter(movie => {
      return movie.title.toLowerCase().includes(searchfield.toLowerCase());
  });
  return !movies.length ?  (
      <div className="tc">
          <h1 className="f1">Movie Search</h1>
          <h1 className="f3">Loading . . .</h1>
      </div>
  ) : 
  (
      <div className="tc">
          <h1 className="f1">Movie Search</h1>
          <SearchBar searchChange={this.onSearchChange} />
          <MovieList movies={filteredMovies} />
      </div>
  );
}
}
export default App;

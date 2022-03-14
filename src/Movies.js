import React, { Component } from "react";

class Movie extends Component {
  render() {
    const movies = this.state.movies;
    return (
    <div className="moviesList">
      <h3>List of Movies Available</h3>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div> );
  }
}

export default Movie;

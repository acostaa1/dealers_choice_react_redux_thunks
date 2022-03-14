import React, { Component } from "react";
import store from "./store";

class Movie extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    store.subscribe(()=> this.setState(store.getState()))
  }
  render() {
    const movies = this.state.movies;
    return (
      <div className="moviesList">
        <h3>List of Movies Available Or Add Your Own ({movies.length})</h3>
        <form onSubmit={() => this.addMovie(this.state.inputMovie)}>
          <input
            placeholder="add a movie title"
            onChange={this.titleChange}
          ></input>
          <button type="submit" className="add">
            Add Movie
          </button>
        </form>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.title}
              <button className="delete" onClick={() => this.remove(movie)}>
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Movie;

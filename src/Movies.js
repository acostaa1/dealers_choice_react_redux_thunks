import React, { Component } from "react";
import axios from 'axios';
import AddMovie from "./AddMovie.js"
import store from "./store";

const remove = async (movie) => {
      await axios.delete(`/api/movies/${movie.id}`);
      store.dispatch({ type: "REMOVE_MOVIE", movie});
    }

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
        <AddMovie />
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              {movie.title}
              <button className="delete" onClick={() => remove(movie)}>
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

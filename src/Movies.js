import React from "react";
import axios from "axios";
import AddMovie from "./AddMovie.js";
import store from './store'
import {connect} from "react-redux";

const remove = async (movie) => {
  await axios.delete(`/api/movies/${movie.id}`);
  store.dispatch({ type: "REMOVE_MOVIE", movie });
};


const Movies = ({ movies }) => {
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
};

const mapStateToProps = function(state) {
  return state;
};
export default connect(state => state)(Movies);

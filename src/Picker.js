import React, { Component } from "react";
import axios from "axios";
import store from "./store";
import {connect} from 'react-redux';

const getRandom = async () => {
  const movies = (await axios.get("/api/movies")).data;
  const selectedMovie = movies[Math.floor(Math.random() * movies.length)].title;
  store.dispatch({ type: "GET_RANDOM_MOVIE", selectedMovie: selectedMovie });
};

// class Picker extends Component {
//   constructor() {
//     super();
//     this.state = store.getState();
//   }
//   componentDidMount() {
//     store.subscribe(()=> this.setState(store.getState()))
//   }
//   render() {
//     const selectedMovie = this.state.selectedMovie;

const Picker = ({selectedMovie}) => {
    return (
      <div className="pickMovie">
        <h3>
          Can't Choose Which To Watch?{" "}
          <button onClick={()=> getRandom()}>Pick for me</button>
        </h3>
        <ul>{selectedMovie}</ul>
      </div>
    );
}
//   }
// }
export default connect(state=> state)(Picker);

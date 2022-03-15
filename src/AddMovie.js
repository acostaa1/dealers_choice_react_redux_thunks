import React, { Component } from "react";
import axios from "axios";
import store from "./store";

const addMovie = async (title) => {
  const movie = (await axios.post(`/api/movies/${title}`)).data;
  store.dispatch({ type: "ADD_MOVIE", movie });
};

class AddMovie extends Component {
  constructor() {
    super();
    this.state = store.getState();
  }
  componentDidMount() {
    store.subscribe(() => this.setState(store.getState()));
  }

  render() {
    const inputTitle = this.state.inputTitle;
    return (
        <form onSubmit={() => addMovie(inputTitle)}>
          <input 
            placeholder="add a movie title"
            onChange={ev => this.setState({ inputTitle: ev.target.value})}
          ></input>
          <button type="submit" className="add">
            Add Movie
          </button>
        </form>
    );
  }
}
export default AddMovie;
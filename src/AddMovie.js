import React, { Component } from "react";
import { addMovie } from "./store";
import { connect } from "react-redux";

// class AddMovie extends Component {
//   constructor() {
//     super();
//     this.state = store.getState();
//   }
//   componentDidMount() {
//     store.subscribe(() => this.setState(store.getState()));
//   }

//   render() {
//     const inputTitle = this.state.inputTitle;

class AddMovie extends Component {
  constructor() {
    super();
    this.state = {
      title: "",
    };
  }
  render() {
    const { title } = this.state;
    const { add } = this.props;
    return (
      <form
        onSubmit={(ev) => {
          ev.preventDefault();
          add(title);
          this.setState({ title: "" });
        }}
      >
        <input
          placeholder="add a movie title"
          value={title}
          name="title"
          onChange={(ev) => {
            this.setState({ title: ev.target.value });
          }}
        ></input>
        <button type="submit" className="add" disabled={!title}>
          Add Movie
        </button>
      </form>
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    add: (title) => {
      dispatch(addMovie(title));
    },
  };
};
export default connect(null, mapDispatch)(AddMovie);

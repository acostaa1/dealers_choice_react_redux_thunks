import React from "react";
import ReactDOM from "react-dom";
import Movies from "./Movies.js";
import Picker from "./Picker.js";
import store, { loadMovies } from "./store.js";
import { Provider, connect } from "react-redux";

const mapDispatch = (dispatch) => {
  return {
    load: async () => {
      dispatch(loadMovies());
    },
  };
};
const App = connect(
  null,
  mapDispatch
)(
  class App extends React.Component {
    async componentDidMount() {
      this.props.load();
    }
    render() {
      return (
        <div>
          <Movies />
          <Picker />
        </div>
      );
    }
  }
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Movies from "./Movies.js";
import Picker from "./picker.js";
import store from "./store.js";

class App extends React.Component {

  async componentDidMount() {
    // first compenent, axios call to get our movies from server <- from db
    try {
      const movies = (await axios.get("/api/movies")).data;
      store.dispatch({ type: "LOAD_MOVIES", movies: movies });

    } catch (error) {
      console.log(error);
    }
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

ReactDOM.render(<App />, document.querySelector("#root"));

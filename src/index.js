import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movies.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
    };
  }
  async componentDidMount() {
    // first compenent, axios call to get our movies from server <- from db
    try {
      const movies = (await axios.get("/api/movies")).data;
      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const movies = this.state.movies;
    return (
      <div>
        <div className="moviesList">
          <h3>List of Movies Available</h3>
          <ul>
            {movies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>

        <div className="pickMovie">
            <h3>Pick A Movie to Watch Tonight <button>Pick Movie</button></h3>
            
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

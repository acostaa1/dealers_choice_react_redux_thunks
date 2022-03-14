import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movies.js";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: [],
    };
    
  }
  //picks a movie from list of movies
  async getRandom() {
      const movies = (await axios.get("/api/movies")).data;
      const selectedMovie = movies[Math.floor(Math.random()*(movies.length))].title;
      this.setState({selectedMovie})
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
            <h3>Pick A Movie to Watch Tonight <button onClick = {()=> this.getRandom()}>Pick Movie</button></h3>
            <ul>{this.state.selectedMovie}</ul>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

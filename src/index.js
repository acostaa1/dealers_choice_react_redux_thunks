import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import Movie from "./Movies.js";
import Picker from "./picker.js";
import store from "./store.js";

class App extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       movies: [],
  //       selectedMovie: [],
  //       inputMovie: "",
  //     };
  //     this.titleChange = this.titleChange.bind(this);
  //   }
  //   //picks a movie from list of movies
    // async getRandom() {
    //   const movies = (await axios.get("/api/movies")).data;
    //   const selectedMovie =
    //     movies[Math.floor(Math.random() * movies.length)].title;
    //   this.setState({ selectedMovie });
    // }
  //   async remove(movie) {
  //     await axios.delete(`/api/movies/${movie.id}`);
  //     const movies = this.state.movies.filter((_movie) => _movie.id !== movie.id);
  //     this.setState({ movies });
  //   }
  //   async addMovie(title) {
  //     const movie = (await axios.post(`/api/movies/${title}`)).data;
  //     const movies = [...this.state.movies, movie];
  //     this.setState({ movies });
  //   }
  //   titleChange(event) {
  //     this.setState({ inputMovie: event.target.value });
  //   }

  async componentDidMount() {
    // first compenent, axios call to get our movies from server <- from db
    try {
      const movies = (await axios.get("/api/movies")).data;
      store.dispatch({ type: "LOAD_MOVIES", movies: movies });

      //this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    //const movies = this.state.movies;
    return (
      <div>
        <Movie />
        <Picker />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

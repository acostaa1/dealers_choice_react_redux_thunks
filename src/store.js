
import { createStore } from 'redux'; 

const reducer = (state = {movies: [], selectedMovie: [], inputTitle: ''}, action) => {
    if(action.type === 'LOAD_MOVIES') {
         state = {...state, movies: action.movies}; 
        }
    if (action.type === "GET_RANDOM_MOVIE") {
         state = {...state, selectedMovie: action.selectedMovie}; }
    if (action.type === "REMOVE_MOVIE" ) {
        const movies = state.movies.filter(movie => movie.id !== action.movie.id);
        state = {...state, movies}
    }
    if (action.type === "ADD_MOVIE") {
        const movies = [...this.state.movies, action.movie]
        state = {...state, movies}
    }
    if (action.type === 'INPUT_TITLE') {
        state = {...state, inputTitle: action.inputTitle}
    }
   
    console.log(action)
    return state;
}
const store = createStore(reducer);

export default store;
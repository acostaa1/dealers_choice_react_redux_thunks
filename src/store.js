import { createStore } from 'redux'; 

const reducer = (state = {movies: [], selectedMovie: [], inputMovie: ''}, action) => {
    if(action.type === 'LOAD_MOVIES') {
         state = {...state, movies: action.movies}; 
        }
    if (action.type === "GET_RANDOM_MOVIE") {
         state = {...state, selectedMovie: action.selectedMovie}; }
    if (action.type === "REMOVE_MOVIE" ) {
        const movies = state.movies.filter(movie => movie.id !== action.movie.id);
        state = {...state, movies}
    }
    console.log(action)
    return state;
}
const store = createStore(reducer);

export default store;
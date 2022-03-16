
import { createStore, combineReducers, applyMiddleware } from 'redux'; 
import thunks from 'redux-thunk';
import axios from 'axios';

// const reducer = (state = {movies: [], selectedMovie: [], inputTitle: ''}, action) => {
//     if(action.type === 'LOAD_MOVIES') {
//          state = {...state, movies: action.movies}; 
//         }
//     if (action.type === "GET_RANDOM_MOVIE") {
//          state = {...state, selectedMovie: action.selectedMovie}; }
//     if (action.type === "REMOVE_MOVIE" ) {
//         const movies = state.movies.filter(movie => movie.id !== action.movie.id);
//         state = {...state, movies}
//     }
//     if (action.type === "ADD_MOVIE") {
//         const movies = [...this.state.movies, action.movie]
//         state = {...state, movies}
//     }
//     if (action.type === 'INPUT_TITLE') {
//         state = {...state, inputTitle: action.inputTitle}
//     }
   
//     console.log(action)
//     return state;
// }

//thunk
export const removeMovie = (movie) => {
    return async (dispatch) => {
    const _movie = await axios.delete(`/api/movies/${movie.id}`);
    dispatch({ type: "REMOVE_MOVIE", movie })
    }
} 
const moviesReducer = (state = [], action) => {
    if(action.type === 'LOAD_MOVIES') {
        return action.movies
    }
    if (action.type === "ADD_MOVIE") {
        return action.movies
    }
    if (action.type === "REMOVE_MOVIE" ) {
        const movies = state.filter(movie => movie.id !== action.movie.id);
        return movies
    }
    
    return state 
}

const selectedMovieReducer = (state= [], action) => {
    if (action.type === "GET_RANDOM_MOVIE") {
        return action.selectedMovie
    }
    return state
}
const inputTitleReducer = (state= '', action) => {
    if(action.type === 'INPUT_TITLE') {
        //console.log(action)
        return action.inputTitle
    }
    
    return state
}
const reducer = combineReducers({
    movies: moviesReducer,
    selectedMovie: selectedMovieReducer,
    inputTitle: inputTitleReducer,
    
});
const store = createStore(reducer, applyMiddleware(thunks));

export default store;
import { createStore } from 'redux'; 

const reducer = (state = {movies: [], selectedMovie: [], inputMovie: ''}, action) => {
    switch (action.type) {
        case "LOAD_MOVIES": state = {...state, movies: action.movies};
        case "GET_RANDOM_MOVIE" : state = {...state, selectedMovie: action.selectedMovie}
    }
    console.log(action)
    return state;
}
const store = createStore(reducer);

export default store;
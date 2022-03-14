import { createStore } from 'redux'; 

const reducer = (state = {movies: [], selectedMovie: [], inputMovie: ''}, action) => {
    switch (action.type) {
        case "LOAD_MOVIES": state = {...state, movies: action.movies}
    }
    console.log(action)
    return state;
}
const store = createStore(reducer);

export default store;
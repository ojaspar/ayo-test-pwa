import { createReducer, on } from '@ngrx/store';
import { getSingleMovieSuccess, invokeGetMoviesSuccess } from './actions';
import { IMovies, IMoviesStateInterface } from './types/index.type';

const initialState: IMoviesStateInterface = {
  movies: [],
  singleMovie: {} as IMovies,
};

export const moviesReducer = createReducer(
  initialState,
  on(invokeGetMoviesSuccess, (state, { payload }) => {
    //   expecting an array but got an object because get all is giving an invalid id so to create that scenario, the object would be pushed into an array

    return {
      ...state,
      movies: Array.isArray(payload) ? payload : [...state.movies, payload],
    };
  }),
  on(getSingleMovieSuccess, (state, { payload }) => {
    return {
      ...state,
      singleMovie: payload,
    };
  })
);

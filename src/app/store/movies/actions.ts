import { createAction, props } from '@ngrx/store';
import { IMovies } from './types/index.type';

export const invokeGetMovies = createAction(
  '[movies] get all movies',
  props<{ query: string }>()
);

export const invokeGetMoviesSuccess = createAction(
  '[movies] get all movies success',
  props<{ payload: IMovies[] }>()
);

export const getSingleMovie = createAction(
  '[movies] get single movie',
  props<{ id: string }>()
);

export const getSingleMovieSuccess = createAction(
  '[movies] get single movie success',
  props<{ payload: IMovies }>()
);

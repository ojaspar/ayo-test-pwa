import { createSelector } from '@ngrx/store';
import { AppStateInterface } from '../types/appState.interface';

export const selectFeature = (state: AppStateInterface) => state.movies;

export const moviesSelector = createSelector(
  selectFeature,
  (state) => state.movies
);

export const singleMovieSelector = createSelector(
  selectFeature,
  (state) => state.singleMovie
);

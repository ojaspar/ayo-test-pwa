import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { setAPIResponseMessage } from '../shared/app.action';
import { switchMap, map, mergeMap, of } from 'rxjs';

import { AppResponseInterface } from '../types/appState.interface';
import { MoviesService } from 'src/app/core/service/movies.service';
import {
  invokeGetMoviesSuccess,
  invokeGetMovies,
  getSingleMovie,
  getSingleMovieSuccess,
} from './actions';

@Injectable()
export class MoviesEffects {
  constructor(
    private action$: Actions,
    private appStore: Store<AppResponseInterface>,
    private moviesService: MoviesService
  ) {}

  getAllMovies$ = createEffect(() => {
    return this.action$.pipe(
      ofType(invokeGetMovies),
      mergeMap((action) => {
        this.appStore.dispatch(
          setAPIResponseMessage({
            apiResponseMessage: {
              apiResponseMessage: '',
              isLoading: true,
              isApiSuccessful: false,
            },
          })
        );
        const { query } = action;
        invokeGetMoviesSuccess({ payload: [] });
        return this.moviesService.getMovies(query).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIResponseMessage({
                apiResponseMessage: {
                  apiResponseMessage: '',
                  isLoading: false,
                  isApiSuccessful: true,
                },
              })
            );
            return invokeGetMoviesSuccess({
              payload: data,
            });
          })
        );
      })
    );
  });

  getSingleMovie$ = createEffect(() => {
    return this.action$.pipe(
      ofType(getSingleMovie),
      mergeMap((action) => {
        this.appStore.dispatch(
          setAPIResponseMessage({
            apiResponseMessage: {
              apiResponseMessage: '',
              isLoading: true,
              isApiSuccessful: false,
            },
          })
        );
        const { id } = action;
        return this.moviesService.getMovies(id).pipe(
          map((data) => {
            this.appStore.dispatch(
              setAPIResponseMessage({
                apiResponseMessage: {
                  apiResponseMessage: '',
                  isLoading: false,
                  isApiSuccessful: true,
                },
              })
            );
            return getSingleMovieSuccess({
              payload: data,
            });
          })
        );
      })
    );
  });
}

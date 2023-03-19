import { IMoviesStateInterface } from '../movies/types/index.type';

export interface AppLoadingStateInterface {
  isLoading: boolean;
}

export interface AppResponseInterface extends AppLoadingStateInterface {
  apiResponseMessage: string | object;
  isApiSuccessful: boolean;
}

export interface AppStateInterface {
  movies: IMoviesStateInterface;
}

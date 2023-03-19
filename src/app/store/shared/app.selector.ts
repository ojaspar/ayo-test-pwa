import { createFeatureSelector } from '@ngrx/store';
import {
  AppLoadingStateInterface,
  AppResponseInterface,
} from '../types/appState.interface';

export const selectAppAPIResponse =
  createFeatureSelector<AppResponseInterface>('apiResponse');

export const selectIsLoading =
  createFeatureSelector<AppLoadingStateInterface>('isLoading');

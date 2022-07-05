import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFeatureLogin from './feature-login.reducer';

export const selectFeatureLoginState = createFeatureSelector<fromFeatureLogin.State>(
  fromFeatureLogin.featureLoginFeatureKey
);

export const selectLoading=createSelector(
  selectFeatureLoginState,
  (state)=>state.user
)

export const selectUser = createSelector(
  selectFeatureLoginState,
  selectLoading,
  (state) => state.user
)
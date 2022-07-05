import { Action, createReducer, on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/User';
import * as FeatureLoginActions from './feature-login.actions';

export const featureLoginFeatureKey = 'featureLogin';

export interface State {
  user:User[]
}

export const initialState: State = {
  user:[]
};

export const reducer = createReducer(
  initialState,

  on(FeatureLoginActions.loadFeatureLogins, state => state),
  on(FeatureLoginActions.loadFeatureLoginsSuccess, (state, {user}) => {
    return {...state,user}
  }),
  on(FeatureLoginActions.loadFeatureLoginsFailure, (state, action) => state),

);

import { Action, createReducer, on } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/User';
import * as FeatureLoginActions from './feature-login.actions';

export const featureLoginFeatureKey = 'featureLogin';

export interface State {
  user: User
}

export const initialState: State = {
  user: null
};

export const userReducer = createReducer(
  initialState,
  on(FeatureLoginActions.loadFeatureLogins, (state) => {
    return { ...state, loading: true }
  }),
  on(FeatureLoginActions.loadFeatureLoginsSuccess, (state, { user }) => {
    return { ...state, user, loading:false }
  }),
  on(FeatureLoginActions.loadFeatureLoginsLogout,(state)=>{
    return {...state,user:null,loading:false}
  })

);

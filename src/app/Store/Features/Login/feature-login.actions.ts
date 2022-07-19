import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/User';

export const loadFeatureLogins = createAction(
  '[FeatureLogin] Load User'
);

export const loadFeatureGetUser = createAction(
  '[FeatureLogin] Load GET Users',
  props<{ user: User[] }>()
);

export const loadFeatureLoginsSuccess = createAction(
  '[FeatureLogin] Load User Success',
  props<{ user: User }>()
);

export const loadFeatureLoginsLogout = createAction(
  '[FeatureLogin] Logout Success'
);


export const loadFeatureLoginsFail = createAction(
  '[FeatureLogin] Load Fail',
  props<{ error: any }>()
);

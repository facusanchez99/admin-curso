import { createAction, props } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/User';

export const loadFeatureLogins = createAction(
  '[FeatureLogin] Load FeatureLogins'
);

export const loadFeatureLoginsSuccess = createAction(
  '[FeatureLogin] Load FeatureLogins Success',
  props<{ user: User[] }>()
);

export const loadFeatureLoginsFailure = createAction(
  '[FeatureLogin] Load FeatureLogins Failure',
  props<{ error: any }>()
);

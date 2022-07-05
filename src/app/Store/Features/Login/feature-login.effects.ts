import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as FeatureLoginActions from './feature-login.actions';
import { UserService } from 'src/app/service/user.service';


@Injectable()
export class FeatureLoginEffects {

  loadFeatureLogins$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[User Page] Load user'),
      mergeMap(() => this.usersService.getUser()
        .pipe(
          map(user => ({ type: '[User Page] User Loaded Success', payload: user })),
          catchError(() => of({ type: '[User Page] User Loaded Error' }))
        )
      )
    )
  );

  constructor(private actions$: Actions, private usersService: UserService) { }
}

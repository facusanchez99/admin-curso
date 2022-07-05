import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FeatureLoginEffects } from './feature-login.effects';

describe('FeatureLoginEffects', () => {
  let actions$: Observable<any>;
  let effects: FeatureLoginEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FeatureLoginEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(FeatureLoginEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

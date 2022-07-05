import * as fromFeatureLogin from './feature-login.reducer';
import { selectFeatureLoginState } from './feature-login.selectors';

describe('FeatureLogin Selectors', () => {
  it('should select the feature state', () => {
    const result = selectFeatureLoginState({
      [fromFeatureLogin.featureLoginFeatureKey]: {}
    });

    expect(result).toEqual({});
  });
});

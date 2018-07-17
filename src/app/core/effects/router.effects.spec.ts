import {TestBed, inject} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';
import {Observable} from 'rxjs/Observable';

import {RouterEffects} from './router.effects';

describe('RouterService', () => {
  let actions$: Observable<any>;
  let effects: RouterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        RouterEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.get(RouterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});

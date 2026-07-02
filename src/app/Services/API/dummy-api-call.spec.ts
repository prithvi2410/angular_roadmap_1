import { TestBed } from '@angular/core/testing';

import { DummyApiCall } from './dummy-api-call';

describe('DummyApiCall', () => {
  let service: DummyApiCall;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DummyApiCall);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

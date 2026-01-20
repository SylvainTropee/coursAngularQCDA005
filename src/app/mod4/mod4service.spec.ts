import { TestBed } from '@angular/core/testing';

import { Mod4service } from './mod4service';

describe('Mod4service', () => {
  let service: Mod4service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod4service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

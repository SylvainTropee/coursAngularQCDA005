import { TestBed } from '@angular/core/testing';

import { Mod7demo1 } from './mod7demo1';

describe('Mod7demo1', () => {
  let service: Mod7demo1;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Mod7demo1);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

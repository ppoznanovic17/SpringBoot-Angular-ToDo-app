import { TestBed } from '@angular/core/testing';

import { HardcodedAuthenService } from './hardcoded-authen.service';

describe('HardcodedAuthenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HardcodedAuthenService = TestBed.get(HardcodedAuthenService);
    expect(service).toBeTruthy();
  });
});

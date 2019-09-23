import { TestBed } from '@angular/core/testing';

import { SayitcomService } from './sayitcom.service';

describe('SayitcomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SayitcomService = TestBed.get(SayitcomService);
    expect(service).toBeTruthy();
  });
});

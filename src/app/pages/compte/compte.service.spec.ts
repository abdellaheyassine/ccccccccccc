import { TestBed } from '@angular/core/testing';

import { CompteService } from './compte.service';

describe('CompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const type: CompteService = TestBed.get(CompteService);
    expect(type).toBeTruthy();
  });
});
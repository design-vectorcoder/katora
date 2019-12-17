import { TestBed } from '@angular/core/testing';

import { KatoraService } from './katora.service';

describe('KatoraService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KatoraService = TestBed.get(KatoraService);
    expect(service).toBeTruthy();
  });
});

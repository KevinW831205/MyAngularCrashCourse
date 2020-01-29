import { TestBed } from '@angular/core/testing';

import { Personv2Service } from './personv2.service';

describe('Personv2Service', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Personv2Service = TestBed.get(Personv2Service);
    expect(service).toBeTruthy();
  });
});

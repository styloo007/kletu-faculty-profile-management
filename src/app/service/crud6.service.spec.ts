import { TestBed } from '@angular/core/testing';

import { Crud6Service } from './crud6.service';

describe('Crud6Service', () => {
  let service: Crud6Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Crud6Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

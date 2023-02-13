import { TestBed } from '@angular/core/testing';

import { MottoService } from './motto.service';

describe('MottoService', () => {
  let service: MottoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MottoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

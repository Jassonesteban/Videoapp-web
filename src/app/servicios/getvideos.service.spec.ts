import { TestBed } from '@angular/core/testing';

import { GetvideosService } from './getvideos.service';

describe('GetvideosService', () => {
  let service: GetvideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetvideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

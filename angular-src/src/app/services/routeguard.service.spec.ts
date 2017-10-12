import { TestBed, inject } from '@angular/core/testing';

import { RouteGuard } from './routeguard.service';

describe('RouteGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RouteGuard]
    });
  });

  it('should be created', inject([RouteGuard], (service: RouteGuard) => {
    expect(service).toBeTruthy();
  }));
});

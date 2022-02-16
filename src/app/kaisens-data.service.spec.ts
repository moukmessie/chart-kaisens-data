import { TestBed } from '@angular/core/testing';

import { KaisensDataService } from './kaisens-data.service';

describe('KaisensDataService', () => {
  let service: KaisensDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KaisensDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

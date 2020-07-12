import { TestBed } from '@angular/core/testing';

import { ProbeDataService } from './probe-data.service';

describe('ProbeDataService', () => {
  let service: ProbeDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProbeDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

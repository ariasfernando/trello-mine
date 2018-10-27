import { TestBed } from '@angular/core/testing';

import { DateCompareService } from './date-compare.service';

describe('DateCompareService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DateCompareService = TestBed.get(DateCompareService);
    expect(service).toBeTruthy();
  });
});

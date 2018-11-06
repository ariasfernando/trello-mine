import { TestBed } from '@angular/core/testing';

import { FormatHelperService } from './format-helper.service';

describe('FormatHelperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormatHelperService = TestBed.get(FormatHelperService);
    expect(service).toBeTruthy();
  });
});

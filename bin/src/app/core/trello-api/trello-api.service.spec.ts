import { TestBed } from '@angular/core/testing';

import { TrelloApiService } from './trello-api.service';

describe('TrelloApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TrelloApiService = TestBed.get(TrelloApiService);
    expect(service).toBeTruthy();
  });
});

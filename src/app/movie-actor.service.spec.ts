import { TestBed } from '@angular/core/testing';

import { MovieActorService } from './movie-actor.service';

describe('MovieActorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieActorService = TestBed.get(MovieActorService);
    expect(service).toBeTruthy();
  });
});

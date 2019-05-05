import { TestBed } from '@angular/core/testing';

import { GetlibrosService } from './getlibros.service';

describe('GetlibrosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetlibrosService = TestBed.get(GetlibrosService);
    expect(service).toBeTruthy();
  });
});

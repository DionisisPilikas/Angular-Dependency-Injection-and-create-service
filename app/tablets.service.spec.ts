import { TestBed } from '@angular/core/testing';

import { TabletsService } from './tablets.service';

describe('TabletsService', () => {
  let service: TabletsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TabletsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

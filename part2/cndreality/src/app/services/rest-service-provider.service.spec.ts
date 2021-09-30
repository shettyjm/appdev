import { TestBed } from '@angular/core/testing';

import { RestServiceProviderService } from './rest-service-provider.service';

describe('RestServiceProviderService', () => {
  let service: RestServiceProviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RestServiceProviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

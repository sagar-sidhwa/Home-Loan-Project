import { TestBed } from '@angular/core/testing';

import { RegisterAdminService } from './register-admin.service';

describe('RegisterAdminService', () => {
  let service: RegisterAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

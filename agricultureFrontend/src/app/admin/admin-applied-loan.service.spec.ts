import { TestBed } from '@angular/core/testing';

import { AdminAppliedLoanService } from './admin-applied-loan.service';

describe('AdminAppliedLoanService', () => {
  let service: AdminAppliedLoanService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminAppliedLoanService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

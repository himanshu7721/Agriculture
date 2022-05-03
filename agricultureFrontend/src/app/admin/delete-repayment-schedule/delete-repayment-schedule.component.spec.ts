import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRepaymentScheduleComponent } from './delete-repayment-schedule.component';

describe('DeleteRepaymentScheduleComponent', () => {
  let component: DeleteRepaymentScheduleComponent;
  let fixture: ComponentFixture<DeleteRepaymentScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteRepaymentScheduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteRepaymentScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

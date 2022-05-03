import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCustprofileComponent } from './create-custprofile.component';

describe('CreateCustprofileComponent', () => {
  let component: CreateCustprofileComponent;
  let fixture: ComponentFixture<CreateCustprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateCustprofileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCustprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

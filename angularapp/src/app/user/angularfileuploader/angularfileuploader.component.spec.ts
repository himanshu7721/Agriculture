import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularfileuploaderComponent } from './angularfileuploader.component';

describe('AngularfileuploaderComponent', () => {
  let component: AngularfileuploaderComponent;
  let fixture: ComponentFixture<AngularfileuploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularfileuploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularfileuploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

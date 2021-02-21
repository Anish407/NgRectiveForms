import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationssComponent } from './validationss.component';

describe('ValidationssComponent', () => {
  let component: ValidationssComponent;
  let fixture: ComponentFixture<ValidationssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValidationssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValidationssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

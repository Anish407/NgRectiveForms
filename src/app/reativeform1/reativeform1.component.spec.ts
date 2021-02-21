import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Reativeform1Component } from './reativeform1.component';

describe('Reativeform1Component', () => {
  let component: Reativeform1Component;
  let fixture: ComponentFixture<Reativeform1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Reativeform1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Reativeform1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

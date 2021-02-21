import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuplicationsComponent } from './duplications.component';

describe('DuplicationsComponent', () => {
  let component: DuplicationsComponent;
  let fixture: ComponentFixture<DuplicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuplicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

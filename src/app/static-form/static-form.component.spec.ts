import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticFormComponent } from './static-form.component';

describe('StaticFormComponent', () => {
  let component: StaticFormComponent;
  let fixture: ComponentFixture<StaticFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StaticFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StaticFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

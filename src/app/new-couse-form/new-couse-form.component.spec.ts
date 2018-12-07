import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCouseFormComponent } from './new-couse-form.component';

describe('NewCouseFormComponent', () => {
  let component: NewCouseFormComponent;
  let fixture: ComponentFixture<NewCouseFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewCouseFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewCouseFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

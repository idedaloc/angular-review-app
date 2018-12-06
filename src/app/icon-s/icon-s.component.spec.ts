import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconSComponent } from './icon-s.component';

describe('IconSComponent', () => {
  let component: IconSComponent;
  let fixture: ComponentFixture<IconSComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconSComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

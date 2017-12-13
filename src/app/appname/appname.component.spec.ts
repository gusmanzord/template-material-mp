import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppnameComponent } from './appname.component';

describe('AppnameComponent', () => {
  let component: AppnameComponent;
  let fixture: ComponentFixture<AppnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

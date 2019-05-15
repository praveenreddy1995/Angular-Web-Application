import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndiaLocationComponent } from './india-location.component';

describe('IndiaLocationComponent', () => {
  let component: IndiaLocationComponent;
  let fixture: ComponentFixture<IndiaLocationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndiaLocationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndiaLocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

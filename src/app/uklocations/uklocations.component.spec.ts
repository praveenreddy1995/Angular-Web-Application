import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UKlocationsComponent } from './uklocations.component';

describe('UKlocationsComponent', () => {
  let component: UKlocationsComponent;
  let fixture: ComponentFixture<UKlocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UKlocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UKlocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

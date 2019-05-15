import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { USlocationsComponent } from './uslocations.component';

describe('USlocationsComponent', () => {
  let component: USlocationsComponent;
  let fixture: ComponentFixture<USlocationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ USlocationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(USlocationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

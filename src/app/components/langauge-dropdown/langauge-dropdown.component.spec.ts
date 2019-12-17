import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangaugeDropdownComponent } from './langauge-dropdown.component';

describe('LangaugeDropdownComponent', () => {
  let component: LangaugeDropdownComponent;
  let fixture: ComponentFixture<LangaugeDropdownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangaugeDropdownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangaugeDropdownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

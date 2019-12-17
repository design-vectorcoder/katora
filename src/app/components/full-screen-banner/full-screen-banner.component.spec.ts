import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenBannerComponent } from './full-screen-banner.component';

describe('FullScreenBannerComponent', () => {
  let component: FullScreenBannerComponent;
  let fixture: ComponentFixture<FullScreenBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FullScreenBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FullScreenBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

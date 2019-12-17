import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopOneComponent } from './shop-one.component';

describe('ShopOneComponent', () => {
  let component: ShopOneComponent;
  let fixture: ComponentFixture<ShopOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

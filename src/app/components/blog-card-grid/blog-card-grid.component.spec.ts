import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogCardGridComponent } from './blog-card-grid.component';

describe('BlogCardGridComponent', () => {
  let component: BlogCardGridComponent;
  let fixture: ComponentFixture<BlogCardGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlogCardGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogCardGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

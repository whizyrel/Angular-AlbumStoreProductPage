import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTracklisiingComponent } from './product-tracklisiing.component';

describe('ProductTracklisiingComponent', () => {
  let component: ProductTracklisiingComponent;
  let fixture: ComponentFixture<ProductTracklisiingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTracklisiingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTracklisiingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

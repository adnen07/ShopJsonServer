import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProductByCategoryComponent } from './all-product-by-category.component';

describe('AllProductByCategoryComponent', () => {
  let component: AllProductByCategoryComponent;
  let fixture: ComponentFixture<AllProductByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllProductByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllProductByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

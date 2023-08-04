import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviousOrderrestaurantComponent } from './previous-orderrestaurant.component';

describe('PreviousOrderrestaurantComponent', () => {
  let component: PreviousOrderrestaurantComponent;
  let fixture: ComponentFixture<PreviousOrderrestaurantComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PreviousOrderrestaurantComponent]
    });
    fixture = TestBed.createComponent(PreviousOrderrestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

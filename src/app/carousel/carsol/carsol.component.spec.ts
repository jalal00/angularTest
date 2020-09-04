import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarsolComponent } from './carsol.component';

describe('CarsolComponent', () => {
  let component: CarsolComponent;
  let fixture: ComponentFixture<CarsolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarsolComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarsolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

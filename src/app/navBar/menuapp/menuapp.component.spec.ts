import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuappComponent } from './menuapp.component';

describe('MenuappComponent', () => {
  let component: MenuappComponent;
  let fixture: ComponentFixture<MenuappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

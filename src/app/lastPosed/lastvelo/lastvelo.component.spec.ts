import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastveloComponent } from './lastvelo.component';

describe('LastveloComponent', () => {
  let component: LastveloComponent;
  let fixture: ComponentFixture<LastveloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastveloComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastveloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

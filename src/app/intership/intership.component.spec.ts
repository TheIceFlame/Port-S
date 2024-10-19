import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntershipComponent } from './intership.component';

describe('IntershipComponent', () => {
  let component: IntershipComponent;
  let fixture: ComponentFixture<IntershipComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntershipComponent]
    });
    fixture = TestBed.createComponent(IntershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

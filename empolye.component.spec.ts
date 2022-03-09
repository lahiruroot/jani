import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpolyeComponent } from './empolye.component';

describe('EmpolyeComponent', () => {
  let component: EmpolyeComponent;
  let fixture: ComponentFixture<EmpolyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpolyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpolyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

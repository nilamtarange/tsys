import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PriyaComponent } from './priya.component';

describe('PriyaComponent', () => {
  let component: PriyaComponent;
  let fixture: ComponentFixture<PriyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PriyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PriyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisneyPlusComponent } from './main-disney-plus.component';

describe('MainDisneyPlusComponent', () => {
  let component: MainDisneyPlusComponent;
  let fixture: ComponentFixture<MainDisneyPlusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDisneyPlusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDisneyPlusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

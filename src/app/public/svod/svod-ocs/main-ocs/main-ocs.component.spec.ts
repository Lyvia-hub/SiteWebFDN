import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainOcsComponent } from './main-ocs.component';

describe('MainOcsComponent', () => {
  let component: MainOcsComponent;
  let fixture: ComponentFixture<MainOcsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainOcsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainOcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

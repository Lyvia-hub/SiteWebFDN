import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAmazonVideoComponent } from './main-amazon-video.component';

describe('MainAmazonVideoComponent', () => {
  let component: MainAmazonVideoComponent;
  let fixture: ComponentFixture<MainAmazonVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainAmazonVideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainAmazonVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

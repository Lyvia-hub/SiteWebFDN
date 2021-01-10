import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainNetflixComponent } from './main-netflix.component';

describe('MainNetflixComponent', () => {
  let component: MainNetflixComponent;
  let fixture: ComponentFixture<MainNetflixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainNetflixComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainNetflixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

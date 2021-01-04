import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFdnPresentationComponent } from './main-fdn-presentation.component';

describe('MainFdnPresentationComponent', () => {
  let component: MainFdnPresentationComponent;
  let fixture: ComponentFixture<MainFdnPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainFdnPresentationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainFdnPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

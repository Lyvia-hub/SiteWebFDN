import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSvodComponent } from './main-svod.component';

describe('MainSvodComponent', () => {
  let component: MainSvodComponent;
  let fixture: ComponentFixture<MainSvodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainSvodComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainSvodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

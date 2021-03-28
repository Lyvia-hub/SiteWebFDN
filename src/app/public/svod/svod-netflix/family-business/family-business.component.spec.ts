import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyBusinessComponent } from './family-business.component';

describe('FamilyBusinessComponent', () => {
  let component: FamilyBusinessComponent;
  let fixture: ComponentFixture<FamilyBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FamilyBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FamilyBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

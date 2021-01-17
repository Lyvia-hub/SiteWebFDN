import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTribulationsPhilComponent } from './article-tribulations-phil.component';

describe('ArticleTribulationsPhilComponent', () => {
  let component: ArticleTribulationsPhilComponent;
  let fixture: ComponentFixture<ArticleTribulationsPhilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTribulationsPhilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTribulationsPhilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

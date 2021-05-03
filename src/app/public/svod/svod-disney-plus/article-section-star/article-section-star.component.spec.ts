import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSectionStarComponent } from './article-section-star.component';

describe('ArticleSectionStarComponent', () => {
  let component: ArticleSectionStarComponent;
  let fixture: ComponentFixture<ArticleSectionStarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSectionStarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSectionStarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

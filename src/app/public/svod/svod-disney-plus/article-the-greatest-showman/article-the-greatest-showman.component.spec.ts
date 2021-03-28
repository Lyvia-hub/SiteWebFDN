import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTheGreatestShowmanComponent } from './article-the-greatest-showman.component';

describe('ArticleTheGreatestShowmanComponent', () => {
  let component: ArticleTheGreatestShowmanComponent;
  let fixture: ComponentFixture<ArticleTheGreatestShowmanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTheGreatestShowmanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTheGreatestShowmanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

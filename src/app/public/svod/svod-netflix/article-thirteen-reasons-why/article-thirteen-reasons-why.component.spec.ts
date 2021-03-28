import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleThirteenReasonsWhyComponent } from './article-thirteen-reasons-why.component';

describe('ArticleThirteenReasonsWhyComponent', () => {
  let component: ArticleThirteenReasonsWhyComponent;
  let fixture: ComponentFixture<ArticleThirteenReasonsWhyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleThirteenReasonsWhyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleThirteenReasonsWhyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

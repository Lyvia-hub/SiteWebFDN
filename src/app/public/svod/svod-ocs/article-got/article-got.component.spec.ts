import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleGotComponent } from './article-got.component';

describe('ArticleGotComponent', () => {
  let component: ArticleGotComponent;
  let fixture: ComponentFixture<ArticleGotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleGotComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleGotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

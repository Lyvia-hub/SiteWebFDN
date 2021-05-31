import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetroitComponent } from './article-detroit.component';

describe('ArticleDetroitComponent', () => {
  let component: ArticleDetroitComponent;
  let fixture: ComponentFixture<ArticleDetroitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetroitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetroitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

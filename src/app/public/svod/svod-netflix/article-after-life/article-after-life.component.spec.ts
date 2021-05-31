import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAfterLifeComponent } from './article-after-life.component';

describe('ArticleAfterLifeComponent', () => {
  let component: ArticleAfterLifeComponent;
  let fixture: ComponentFixture<ArticleAfterLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleAfterLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAfterLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

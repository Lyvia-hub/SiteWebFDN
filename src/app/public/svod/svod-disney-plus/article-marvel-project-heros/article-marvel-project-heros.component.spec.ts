import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleMarvelProjectHerosComponent } from './article-marvel-project-heros.component';

describe('ArticleMarvelProjectHerosComponent', () => {
  let component: ArticleMarvelProjectHerosComponent;
  let fixture: ComponentFixture<ArticleMarvelProjectHerosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleMarvelProjectHerosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleMarvelProjectHerosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

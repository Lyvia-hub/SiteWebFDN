import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleVictoriaEtAbdulComponent } from './article-victoria-et-abdul.component';

describe('ArticleVictoriaEtAbdulComponent', () => {
  let component: ArticleVictoriaEtAbdulComponent;
  let fixture: ComponentFixture<ArticleVictoriaEtAbdulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleVictoriaEtAbdulComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleVictoriaEtAbdulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

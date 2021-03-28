import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTheEmpressKiComponent } from './article-the-empress-ki.component';

describe('ArticleTheEmpressKiComponent', () => {
  let component: ArticleTheEmpressKiComponent;
  let fixture: ComponentFixture<ArticleTheEmpressKiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTheEmpressKiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTheEmpressKiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

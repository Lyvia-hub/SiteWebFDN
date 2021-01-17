import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleOmbreDeMaryComponent } from './article-ombre-de-mary.component';

describe('ArticleOmbreDeMaryComponent', () => {
  let component: ArticleOmbreDeMaryComponent;
  let fixture: ComponentFixture<ArticleOmbreDeMaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleOmbreDeMaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleOmbreDeMaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

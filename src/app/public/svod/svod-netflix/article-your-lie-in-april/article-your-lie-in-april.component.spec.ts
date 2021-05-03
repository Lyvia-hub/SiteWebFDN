import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleYourLieInAprilComponent } from './article-your-lie-in-april.component';

describe('ArticleYourLieInAprilComponent', () => {
  let component: ArticleYourLieInAprilComponent;
  let fixture: ComponentFixture<ArticleYourLieInAprilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleYourLieInAprilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleYourLieInAprilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

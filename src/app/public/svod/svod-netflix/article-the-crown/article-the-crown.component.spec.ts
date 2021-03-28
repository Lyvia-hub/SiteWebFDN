import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTheCrownComponent } from './article-the-crown.component';

describe('ArticleTheCrownComponent', () => {
  let component: ArticleTheCrownComponent;
  let fixture: ComponentFixture<ArticleTheCrownComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTheCrownComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTheCrownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

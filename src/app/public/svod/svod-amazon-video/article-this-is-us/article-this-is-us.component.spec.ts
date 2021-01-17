import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleThisIsUsComponent } from './article-this-is-us.component';

describe('ArticleThisIsUsComponent', () => {
  let component: ArticleThisIsUsComponent;
  let fixture: ComponentFixture<ArticleThisIsUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleThisIsUsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleThisIsUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

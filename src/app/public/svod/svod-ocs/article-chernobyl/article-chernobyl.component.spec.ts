import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleChernobylComponent } from './article-chernobyl.component';

describe('ArticleChernobylComponent', () => {
  let component: ArticleChernobylComponent;
  let fixture: ComponentFixture<ArticleChernobylComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleChernobylComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleChernobylComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

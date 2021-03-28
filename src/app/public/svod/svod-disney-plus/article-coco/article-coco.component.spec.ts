import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCocoComponent } from './article-coco.component';

describe('ArticleCocoComponent', () => {
  let component: ArticleCocoComponent;
  let fixture: ComponentFixture<ArticleCocoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCocoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCocoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

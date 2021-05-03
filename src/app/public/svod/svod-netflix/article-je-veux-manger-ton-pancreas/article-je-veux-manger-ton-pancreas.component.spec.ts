import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleJeVeuxMangerTonPancreasComponent } from './article-je-veux-manger-ton-pancreas.component';

describe('ArticleJeVeuxMangerTonPancreasComponent', () => {
  let component: ArticleJeVeuxMangerTonPancreasComponent;
  let fixture: ComponentFixture<ArticleJeVeuxMangerTonPancreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleJeVeuxMangerTonPancreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleJeVeuxMangerTonPancreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBigLittleLiarsComponent } from './article-big-little-liars.component';

describe('ArticleBigLittleLiarsComponent', () => {
  let component: ArticleBigLittleLiarsComponent;
  let fixture: ComponentFixture<ArticleBigLittleLiarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleBigLittleLiarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBigLittleLiarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

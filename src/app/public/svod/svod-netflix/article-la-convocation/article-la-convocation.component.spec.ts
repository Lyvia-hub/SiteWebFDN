import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLaConvocationComponent } from './article-la-convocation.component';

describe('ArticleLaConvocationComponent', () => {
  let component: ArticleLaConvocationComponent;
  let fixture: ComponentFixture<ArticleLaConvocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleLaConvocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLaConvocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

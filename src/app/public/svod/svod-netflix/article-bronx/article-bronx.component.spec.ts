import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleBronxComponent } from './article-bronx.component';

describe('ArticleBronxComponent', () => {
  let component: ArticleBronxComponent;
  let fixture: ComponentFixture<ArticleBronxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleBronxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleBronxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

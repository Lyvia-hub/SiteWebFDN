import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDramaComponent } from './article-drama.component';

describe('ArticleDramaComponent', () => {
  let component: ArticleDramaComponent;
  let fixture: ComponentFixture<ArticleDramaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDramaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

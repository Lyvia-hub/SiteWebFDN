import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSaqqarahComponent } from './article-saqqarah.component';

describe('ArticleSaqqarahComponent', () => {
  let component: ArticleSaqqarahComponent;
  let fixture: ComponentFixture<ArticleSaqqarahComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSaqqarahComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSaqqarahComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

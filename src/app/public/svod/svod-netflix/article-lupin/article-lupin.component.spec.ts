import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLupinComponent } from './article-lupin.component';

describe('ArticleLupinComponent', () => {
  let component: ArticleLupinComponent;
  let fixture: ComponentFixture<ArticleLupinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleLupinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLupinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

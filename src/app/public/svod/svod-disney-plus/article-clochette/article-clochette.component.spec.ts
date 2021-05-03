import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleClochetteComponent } from './article-clochette.component';

describe('ArticleClochetteComponent', () => {
  let component: ArticleClochetteComponent;
  let fixture: ComponentFixture<ArticleClochetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleClochetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleClochetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

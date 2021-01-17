import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleTesComponent } from './article-tes.component';

describe('ArticleTesComponent', () => {
  let component: ArticleTesComponent;
  let fixture: ComponentFixture<ArticleTesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleTesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleTesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

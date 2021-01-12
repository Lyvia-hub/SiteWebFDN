import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleSoaComponent } from './article-soa.component';

describe('ArticleSoaComponent', () => {
  let component: ArticleSoaComponent;
  let fixture: ComponentFixture<ArticleSoaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleSoaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleSoaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

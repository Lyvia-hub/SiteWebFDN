import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDraculaComponent } from './article-dracula.component';

describe('ArticleDraculaComponent', () => {
  let component: ArticleDraculaComponent;
  let fixture: ComponentFixture<ArticleDraculaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDraculaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDraculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

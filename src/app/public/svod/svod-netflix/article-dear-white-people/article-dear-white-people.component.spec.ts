import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDearWhitePeopleComponent } from './article-dear-white-people.component';

describe('ArticleDearWhitePeopleComponent', () => {
  let component: ArticleDearWhitePeopleComponent;
  let fixture: ComponentFixture<ArticleDearWhitePeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDearWhitePeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDearWhitePeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

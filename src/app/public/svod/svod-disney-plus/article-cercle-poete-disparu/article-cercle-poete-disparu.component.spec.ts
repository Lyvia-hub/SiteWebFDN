import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleCerclePoeteDisparuComponent } from './article-cercle-poete-disparu.component';

describe('ArticleCerclePoeteDisparuComponent', () => {
  let component: ArticleCerclePoeteDisparuComponent;
  let fixture: ComponentFixture<ArticleCerclePoeteDisparuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleCerclePoeteDisparuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleCerclePoeteDisparuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

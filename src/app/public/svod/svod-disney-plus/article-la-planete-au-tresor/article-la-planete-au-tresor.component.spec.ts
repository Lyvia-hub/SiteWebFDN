import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleLaPlaneteAuTresorComponent } from './article-la-planete-au-tresor.component';

describe('ArticleLaPlaneteAuTresorComponent', () => {
  let component: ArticleLaPlaneteAuTresorComponent;
  let fixture: ComponentFixture<ArticleLaPlaneteAuTresorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleLaPlaneteAuTresorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleLaPlaneteAuTresorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

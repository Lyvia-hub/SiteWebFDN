import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAnimalKingdomComponent } from './article-animal-kingdom.component';

describe('ArticleAnimalKingdomComponent', () => {
  let component: ArticleAnimalKingdomComponent;
  let fixture: ComponentFixture<ArticleAnimalKingdomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleAnimalKingdomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAnimalKingdomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

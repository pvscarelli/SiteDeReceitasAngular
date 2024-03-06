import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimilarRecipesComponent } from './similar-recipes.component';

describe('SimilarRecipesComponent', () => {
  let component: SimilarRecipesComponent;
  let fixture: ComponentFixture<SimilarRecipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimilarRecipesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SimilarRecipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

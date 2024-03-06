import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { SingleRecipeService } from '../../../../../services/single-recipe/single-recipe.service';

@Component({
  selector: 'app-similar-recipes',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './similar-recipes.component.html',
  styleUrl: './similar-recipes.component.scss',
})
export class SimilarRecipesComponent implements OnInit {
  public loading = true;
  public similarRecipes: any = [];

  @Input() recipeIdSimilar!: number;

  constructor(private service: SingleRecipeService) {}
  ngOnInit(): void {
    this.takeSimilarRecipes(this.recipeIdSimilar);
  }

  takeSimilarRecipes(id: number) {
    this.service
      .takeSimilarRecipe(id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        this.similarRecipes = data.slice(0, 3);
      });
  }

  reloadPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1);
  }
}

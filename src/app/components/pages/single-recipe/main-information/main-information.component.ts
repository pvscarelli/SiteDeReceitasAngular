import { Component, OnInit, Output } from '@angular/core';
import { SingleRecipeService } from '../../../../services/single-recipe/single-recipe.service';
import { ActivatedRoute } from '@angular/router';
import { finalize } from 'rxjs';
import { CommonModule } from '@angular/common';
import { SimilarRecipesComponent } from './similar-recipes/similar-recipes.component';

@Component({
  selector: 'app-main-information',
  standalone: true,
  imports: [CommonModule, SimilarRecipesComponent],
  templateUrl: './main-information.component.html',
  styleUrl: './main-information.component.scss',
})
export class MainInformationComponent implements OnInit {
  public loading: boolean = true;
  public recipeId: number = 1;
  public food: any = [];

  @Output() recipeIdSimilar!: number;
  constructor(
    private service: SingleRecipeService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getRecipeId();
    this.takeRecipe(this.recipeId);
    this.recipeIdSimilar = this.recipeId;
  }

  getRecipeId() {
    this.route.queryParams.subscribe((queryParams: any) => {
      this.recipeId = queryParams['id'];
    });
  }

  takeRecipe(id: number) {
    this.service
      .takeRecipe(id)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        this.food = data;
      });
  }
}

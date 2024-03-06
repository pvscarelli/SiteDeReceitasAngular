import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { finalize } from 'rxjs';
import { RandomRecipesService } from '../../../../services/random-recipes/random-recipes.service';

@Component({
  selector: 'app-food-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './food-card.component.html',
  styleUrl: './food-card.component.scss',
})
export class FoodCardComponent implements OnInit {
  public foods: any = [];
  public loading: boolean = true;
  public loadingMore: boolean = false;

  constructor(private service: RandomRecipesService) {}
  ngOnInit(): void {
    this.getFoods();
  }

  getFoods() {
    this.service
      .listRandomFood(10)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        this.foods = this.foods.concat(data.recipes);
      });
  }

  loadMore() {
    this.loadingMore = true;
    this.service
      .listRandomFood(5)
      .pipe(
        finalize(() => {
          this.loadingMore = false;
        })
      )
      .subscribe((data: any) => {
        this.foods = this.foods.concat(data.recipes);
      });
  }
}

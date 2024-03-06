import { Component } from '@angular/core';
import { FoodCardComponent } from './food-card/food-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  imports: [FoodCardComponent],
})
export class HomeComponent {}

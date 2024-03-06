import { Component } from '@angular/core';
import { MainInformationComponent } from './main-information/main-information.component';

@Component({
  selector: 'app-single-recipe',
  standalone: true,
  templateUrl: './single-recipe.component.html',
  styleUrl: './single-recipe.component.scss',
  imports: [MainInformationComponent],
})
export class SingleRecipeComponent {}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SingleRecipeService {
  constructor(private http: HttpClient) {}

  takeRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/information?apiKey=aea427c3b83642eaa8975053153231a8`;

    return this.http.get(apiUrl);
  }

  takeSimilarRecipe(id: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/${id}/similar?apiKey=aea427c3b83642eaa8975053153231a8`;

    return this.http.get(apiUrl);
  }
}

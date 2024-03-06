import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RandomRecipesService {
  constructor(private http: HttpClient) {}

  listRandomFood(take: number) {
    const apiUrl = `https://api.spoonacular.com/recipes/random?apiKey=aea427c3b83642eaa8975053153231a8&number=${take}`;

    return this.http.get(apiUrl);
  }
}

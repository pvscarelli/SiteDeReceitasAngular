import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchService } from '../../../services/search/search.service';
import { finalize } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent implements OnInit {
  public loading = false;
  public query: string = '';
  public foods: any = [];

  constructor(private service: SearchService) {}
  ngOnInit(): void {}

  getSearch() {
    this.loading = true;
    this.service
      .search(this.query)
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((data: any) => {
        this.foods = data.results;
      });
  }
}

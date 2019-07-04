import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-results-ingridients',
  templateUrl: './search-results-ingridients.component.html',
  styleUrls: ['./search-results-ingridients.component.sass']
})
export class SearchResultsIngridientsComponent implements OnInit {
search: string;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      result => {
        this.search = result.get('search');
      }
    );
  }

  ngOnInit() {
  }

}

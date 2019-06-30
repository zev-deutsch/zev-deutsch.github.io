import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-search-results-recipies',
  templateUrl: './search-results-recipies.component.html',
  styleUrls: ['./search-results-recipies.component.sass']
})
export class SearchResultsRecipiesComponent implements OnInit {
searchrec: string;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(results => {
      this.searchrec = results.get('searchrec');
    });
  }

  ngOnInit() {
  }

}

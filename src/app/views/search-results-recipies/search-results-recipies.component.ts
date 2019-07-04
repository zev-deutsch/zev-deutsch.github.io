import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../controlers/data.service';

@Component({
  selector: 'app-search-results-recipies',
  templateUrl: './search-results-recipies.component.html',
  styleUrls: ['./search-results-recipies.component.scss']
})
export class SearchResultsRecipiesComponent implements OnInit {
  search: string;
  constructor(private route: ActivatedRoute, public service: DataService) {}

  ngOnInit() {
    this.route.paramMap.subscribe(results => {
      this.search = results.get('search');
    });
    this.results();
  }

  results() {
    console.log(this.search);
    this.service.getRecipies(this.search).subscribe(res => console.log(res));
  }
}

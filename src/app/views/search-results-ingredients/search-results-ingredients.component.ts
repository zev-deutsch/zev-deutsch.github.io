import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-search-results-ingredients',
    templateUrl: './search-results-ingredients.component.html',
    styleUrls: ['./search-results-ingredients.component.sass']
})
export class SearchResultsIngredientsComponent implements OnInit {
    i: string;

    constructor(private route: ActivatedRoute) {
        // this.route.paramMap.subscribe(
        //   result => {
        //     this.i = result.get('i');
        //   }
        // );
    }

    ngOnInit() {
    }

}

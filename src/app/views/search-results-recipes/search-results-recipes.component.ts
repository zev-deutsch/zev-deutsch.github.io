import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../models/data.service';
import {Recipes} from '../../controllers/recipes';


@Component({
    selector: 'app-search-results-recipes',
    templateUrl: './search-results-recipes.component.html',
    styleUrls: ['./search-results-recipes.component.scss']
})
export class SearchResultsRecipesComponent implements OnInit {
    search: string;
    recipes: Recipes[];

    constructor(private route: ActivatedRoute, public service: DataService) {
      this.route.paramMap.subscribe(results => {
        this.search = results.get('search');
      });
    }

    ngOnInit() {
      this.results();
    }

    results() {
        this.service.getRecipes(this.search).subscribe((res) => {
            this.recipes = [];
            res.hits.map((item) => {
                this.recipes.push(new Recipes(item));
            });
        });
    }
}

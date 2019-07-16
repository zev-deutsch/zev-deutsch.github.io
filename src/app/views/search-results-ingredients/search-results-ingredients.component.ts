import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipes} from "../../controllers/recipes";
import {DataService} from "../../Models/data.service";

@Component({
  selector: 'app-search-results-ingredients',
  templateUrl: './search-results-ingredients.component.html',
  styleUrls: ['./search-results-ingredients.component.scss']
})

export class SearchResultsIngredientsComponent implements OnInit {
  i: string;
  search: string;
  recipes: Recipes[];
  constructor(private route: ActivatedRoute, private service: DataService) {
    this.route.paramMap.subscribe(
      result => {
<<<<<<< HEAD
        this.i = result.get('i'),
        this.recipe = result.get('recipe');
=======
        this.i = result.get('i');
        this.search = result.get('search');
>>>>>>> 0ff5f5cb166950e9949ca86bc604fbcdbd089251
      }
    );
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

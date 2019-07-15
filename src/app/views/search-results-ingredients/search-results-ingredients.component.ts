import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipies} from "../../controlers/recipies";

@Component({
  selector: 'app-search-results-ingredients',
  templateUrl: './search-results-ingredients.component.html',
  styleUrls: ['./search-results-ingredients.component.sass']
})

export class SearchResultsIngredientsComponent implements OnInit {
  @Input() ingredient;
  i: string;
  //ingredient: any;
  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe(
      result => {
        this.i = result.get('i');
      }
    );
    console.log(this.ingredient);
  }

  ngOnInit() {

    //console.log(this.ingredientLi[this.i]);
    // this.ingredient = this.recipies[this.i].ingredientLines;
    // console.log(this.ingredient)
  }

}

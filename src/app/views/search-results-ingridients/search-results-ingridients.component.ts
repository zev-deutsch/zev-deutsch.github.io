import {Component, Injectable, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Recipies} from "../../controlers/recipies";

@Component({
  selector: 'app-search-results-ingridients',
  templateUrl: './search-results-ingridients.component.html',
  styleUrls: ['./search-results-ingridients.component.sass']
})

export class SearchResultsIngridientsComponent implements OnInit {
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

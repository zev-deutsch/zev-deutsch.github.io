// import { Injectable } from '@angular/core';
//
// @Injectable({
//   providedIn: 'root'
// })
export class Recipies {
label: string;
image: string;
source: string;
ingredientLines: string;
calories: number;
totalTime: number;

  constructor(args?) {
    this.label = args.recipe.label;
    this.image = args.recipe.image;
    this.source = args.recipe.source;
    this.ingredientLines = args.recipe.ingredientLines;
    this.calories = Math.round(args.recipe.calories);
    this.totalTime = args.recipe.totalTime;
  }
}

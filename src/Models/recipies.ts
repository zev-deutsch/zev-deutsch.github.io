export class Recipies {
label: string;
image: string;
source: string;
text: string;
ingredientLines: string;
calories: number;
totalTime: number;

constructor(args?) {
  this.label = args.label;
  this.image = args.image;
  this.source = args.source;
  this.text = args.text;
  this.ingredientLines = args.ingredientLines;
  this.calories = args.calories;
  this.totalTime = args.totalTime;
}
}

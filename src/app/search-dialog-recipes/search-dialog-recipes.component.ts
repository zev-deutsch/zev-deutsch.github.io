import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-search-dialog-recipes',
  templateUrl: './search-dialog-recipes.component.html',
  styleUrls: ['./search-dialog-recipes.component.scss']
})
export class SearchDialogRecipesComponent implements OnInit {
  searchrec: any;

  constructor(public dialogRef: MatDialogRef<SearchDialogRecipesComponent>,
              @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit() {
  }

}

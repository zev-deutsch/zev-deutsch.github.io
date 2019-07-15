import {Component, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material';
import {SearchDialogRecipesComponent} from '../search-dialog-recipes/search-dialog-recipes.component';

@Component({
    selector: 'app-search-bar',
    templateUrl: './search-bar.component.html',
    styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
    name: string;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    openRecipes(): void {
        this.dialog.open(SearchDialogRecipesComponent, {
            width: '400px',
            height: '300px',
            data: {name: this.name}
        });
    }
}



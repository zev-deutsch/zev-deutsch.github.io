import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-search-dialog',
    templateUrl: './search-dialog.component.html',
    styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent {
    search: any;

    constructor(
        public dialogRef: MatDialogRef<SearchDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data
    ) {
    }

    dialogClose() {
        this.dialogRef.close();
    }
}

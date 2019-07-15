import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SearchBarComponent} from './views/search-bar-ingredients/search-bar.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTooltipModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import {SearchDialogRecipesComponent} from './views/search-dialog-recipes/search-dialog-recipes.component';
import {SearchResultsIngredientsComponent} from './views/search-results-ingredients/search-results-ingredients.component';
import {SearchResultsRecipesComponent} from './views/search-results-recipes/search-results-recipes.component';
import {HttpClientModule} from '@angular/common/http';
import {TruncatePipe} from './controllers/truncate.pipe';


@NgModule({
    declarations: [
        AppComponent,
        SearchBarComponent,
        SearchDialogRecipesComponent,
        SearchResultsIngredientsComponent,
        SearchResultsRecipesComponent,
        TruncatePipe
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatDialogModule,
        MatCardModule,
        HttpClientModule,
        MatDividerModule,
        MatTooltipModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
    entryComponents: [SearchDialogRecipesComponent]
})
export class AppModule {
}

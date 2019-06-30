import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './search-bar-ingridients/search-bar.component';
import {MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { SearchDialogComponent } from './search-dialog-Ingridients/search-dialog.component';
import {SearchDialogRecipesComponent} from './search-dialog-recipes/search-dialog-recipes.component';
import { SearchResultsIngridientsComponent } from './search-results-ingridients/search-results-ingridients.component';
import { SearchResultsRecipiesComponent } from './search-results-recipies/search-results-recipies.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchDialogComponent,
    SearchDialogRecipesComponent,
    SearchResultsIngridientsComponent,
    SearchResultsRecipiesComponent
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
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SearchDialogComponent, SearchDialogRecipesComponent]
})
export class AppModule { }

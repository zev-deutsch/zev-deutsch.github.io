import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchBarComponent } from './views/search-bar-ingridients/search-bar.component';
import {MatButtonModule, MatCardModule, MatDividerModule, MatFormFieldModule, MatInputModule, MatTooltipModule} from '@angular/material';
import { FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatDialogModule} from '@angular/material/dialog';
import { SearchDialogComponent } from './views/search-dialog-Ingridients/search-dialog.component';
import {SearchDialogRecipesComponent} from './views/search-dialog-recipes/search-dialog-recipes.component';
import { SearchResultsIngridientsComponent } from './views/search-results-ingridients/search-results-ingridients.component';
import { SearchResultsRecipiesComponent } from './views/search-results-recipies/search-results-recipies.component';
import {HttpClientModule} from '@angular/common/http';
import { TruncatePipe } from './controlers/truncate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    SearchDialogComponent,
    SearchDialogRecipesComponent,
    SearchResultsIngridientsComponent,
    SearchResultsRecipiesComponent,
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
  entryComponents: [SearchDialogComponent, SearchDialogRecipesComponent]
})
export class AppModule { }

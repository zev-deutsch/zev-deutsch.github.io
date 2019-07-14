import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchBarComponent} from './views/search-bar-ingredients/search-bar.component';
import {SearchResultsIngredientsComponent} from './views/search-results-ingredients/search-results-ingredients.component';
import {SearchResultsRecipesComponent} from './views/search-results-recipes/search-results-recipes.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: SearchBarComponent},
  {path: 'recipesresults/coffee/ingredientsresult', component: SearchResultsIngredientsComponent},
  {path: 'recipesresults/:search', component: SearchResultsRecipesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

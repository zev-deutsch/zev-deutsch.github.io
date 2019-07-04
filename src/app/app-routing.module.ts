import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SearchBarComponent} from './views/search-bar-ingridients/search-bar.component';
import {SearchResultsIngridientsComponent} from './views/search-results-ingridients/search-results-ingridients.component';
import {SearchResultsRecipiesComponent} from './views/search-results-recipies/search-results-recipies.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: SearchBarComponent},
  {path: 'ingridientsresult/:search' , component: SearchResultsIngridientsComponent},
  {path: 'recipesresults/:searchrec', component: SearchResultsRecipiesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

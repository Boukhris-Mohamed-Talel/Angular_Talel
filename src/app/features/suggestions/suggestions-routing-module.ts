import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Suggestions } from './suggestions';
import { SuggestionsList } from './suggestions-list/suggestions-list';
import { SuggestionDetails } from './suggestion-details/suggestion-details';

const routes: Routes = [
  {
    path: '',
    component: Suggestions,
    children: [
      { path: '', component: SuggestionsList },
      { path: ':id', component: SuggestionDetails }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuggestionsRoutingModule {}

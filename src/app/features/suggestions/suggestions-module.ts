import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { SuggestionsRoutingModule } from './suggestions-routing-module';
import { Suggestions } from './suggestions';
import { SuggestionsList } from './suggestions-list/suggestions-list';
import { SuggestionDetails } from './suggestion-details/suggestion-details';

@NgModule({
  declarations: [
    Suggestions,
    SuggestionsList,
    SuggestionDetails
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SuggestionsRoutingModule
  ]
})
export class SuggestionsModule {}

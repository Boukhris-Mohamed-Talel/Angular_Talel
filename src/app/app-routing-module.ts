import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Home } from './core/home/home';
import { NotFound } from './core/notfound/notfound';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  {
    path: 'listSuggestion',
    loadChildren: () =>
      import('./features/suggestions/suggestions-module').then(
        m => m.SuggestionsModule
      )
  },
  {
    path: 'suggestions',
    loadChildren: () =>
      import('./features/suggestions/suggestions-module').then(
        m => m.SuggestionsModule
      )
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./features/users/users-module').then(m => m.UsersModule)
  },
  { path: '**', component: NotFound }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

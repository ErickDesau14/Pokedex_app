import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'list-pokemons',
    loadChildren: () => import('./pages/list-pokemons/list-pokemons.module').then( m => m.ListPokemonsPageModule)
  },
  {
    path: 'detail-pokemons',
    loadChildren: () => import('./pages/detail-pokemons/detail-pokemons.module').then( m => m.DetailPokemonsPageModule)
  },
  {
    path: '',
    redirectTo: 'list-pokemons',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

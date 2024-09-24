import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DetailPokemonsPage } from './detail-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPokemonsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DetailPokemonsPageRoutingModule {}

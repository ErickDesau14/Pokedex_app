import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPokemonsPageRoutingModule } from './detail-pokemons-routing.module';

import { DetailPokemonsPage } from './detail-pokemons.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPokemonsPageRoutingModule
  ],
  declarations: [DetailPokemonsPage]
})
export class DetailPokemonsPageModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DetailPokemonsPageRoutingModule } from './detail-pokemons-routing.module';

import { DetailPokemonsPage } from './detail-pokemons.page';
import { GetStatPipe } from 'src/app/pipes/get-stat.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPokemonsPageRoutingModule,
    GetStatPipe
  ],
  declarations: [DetailPokemonsPage]
})
export class DetailPokemonsPageModule {}

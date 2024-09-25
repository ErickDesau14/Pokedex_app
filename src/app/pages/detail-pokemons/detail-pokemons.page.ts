import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { Pokemon } from 'src/app/models/pokemon';

@Component({
  selector: 'app-detail-pokemons',
  templateUrl: './detail-pokemons.page.html',
  styleUrls: ['./detail-pokemons.page.scss'],
})
export class DetailPokemonsPage {
  public pokemon: Pokemon;

  constructor(
    private navParams: NavParams,
    private navController: NavController
  ) {
    this.pokemon = this.navParams.data['pokemon'];
    console.log(this.pokemon);
  }

  goBack() {
    this.navController.pop();
  }
}

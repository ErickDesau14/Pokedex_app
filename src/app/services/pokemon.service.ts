import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CapacitorHttp } from '@capacitor/core';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private nextUrl: string;

  constructor() {
    this.nextUrl = 'https://pokeapi.co/api/v2/pokemon?offset=00limit=20';
  }

  getPokemons() {

    const url = this.nextUrl;

    if (url) {
      const options = {
        url,
        headers: {},
        params: {},
      };

      return CapacitorHttp.get(options).then(async (response) => {
        let pokemons: Pokemon[] = [];

        console.log(response);

        if (response.data) {
          const results = response.data.results;
          this.nextUrl = response.data.next;

          const promises: Promise<HttpResponse>[] = [];

          for (let index = 0; index < results.length; index++) {
            const pokemon = results[index];
            const urlPokemon = pokemon.url;
            const options = {
              url: urlPokemon,
              headers: {},
              params: {},
            };
            promises.push(CapacitorHttp.get(options));
          }

          await Promise.all(promises).then((responses) => {
            console.log(responses);
          });
        }

        return pokemons;
      });

    }
    return null;
  }
}

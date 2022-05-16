import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PokemonsService {
  pokemonList = 'https://pokeapi.co/api/v2/pokemon?limit=1000';
  constructor(private http: HttpClient) {}
  GetPokemons() {
    return this.http.get(this.pokemonList);
  }
  GetPokemonById(pokemonUrl: any = 'https://pokeapi.co/api/v2/pokemon/1') {
    return this.http.get(pokemonUrl);
  }
}

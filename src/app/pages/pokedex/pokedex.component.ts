import { Component, OnInit } from '@angular/core';
import { PokemonsService } from 'src/app/services/pokemons.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  selectedPkmSpriteUrl = '';
  pkmList: Array<any> = [];
  selectedPkm:any = {};
  constructor(private pokemonsService: PokemonsService) {}

  ngOnInit(): void {
    this.GetPkmImage();
    this.GetPkmByID();
  }

  GetPkmImage() {
    this.pokemonsService.GetPokemons().subscribe(({ results }: any) => {
      this.pkmList = results;

    });
  }

  GetPkmByID() {
    this.pokemonsService.GetPokemonById(this.selectedPkm.url).subscribe(({ sprites }: any) => {
      this.selectedPkmSpriteUrl = sprites.front_default;
    });
  }
}

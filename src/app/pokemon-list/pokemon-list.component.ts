import { Component, OnInit } from '@angular/core';
   import { PokemonService } from '../pokemon.service';

   @Component({
     selector: 'app-pokemon-list',
     templateUrl: './pokemon-list.component.html',
     styleUrls: ['./pokemon-list.component.css']
   })
   export class PokemonListComponent implements OnInit {
     pokemons: any[] = [];

     constructor(private pokemonService: PokemonService) { }

     ngOnInit(): void {
       this.getPokemons();
     }

     getPokemons(): void {
       this.pokemonService.getPokemons()
         .subscribe(pokemons => this.pokemons = pokemons.results.slice(0, 20));
     }
   }
  
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonService } from './pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonListComponent
    // outros componentes
  ],
  imports: [
    CommonModule,
    HttpClientModule
    // outros módulos
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class CoreModule { }


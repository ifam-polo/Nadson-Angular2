import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


//Components
import { PokeHeaderComponent } from './poke-header/poke-header.component';
import { PokeSearchComponent } from './poke-search/poke-search.component';
import { PokeListComponent } from './poke-list/poke-list.component';
import { FoodAddComponent } from './food-add/food-add.component';


@NgModule({
  declarations: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent,
    FoodAddComponent
  ],
  exports: [
    PokeHeaderComponent,
    PokeSearchComponent,
    PokeListComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
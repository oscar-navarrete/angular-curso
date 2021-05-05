import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { NgModule }from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    HeroeComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListadoComponent
  ]
})


export class HeroesModule { }

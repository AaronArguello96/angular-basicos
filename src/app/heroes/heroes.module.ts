import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { HeroeComponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';

@NgModule({
    declarations:[
        HeroeComponent,
        ListadoComponent
    ],
    exports:[ //Elementos que queremos que se vean fuera de este modulo
        ListadoComponent
    ],
    imports: [ //Aqui solo van modulos
        CommonModule
    ]
    
})

export class HeroesModule{}
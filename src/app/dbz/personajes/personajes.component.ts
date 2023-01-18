import { Component, Input } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
})

export class PersonajesComponent {

  //@Input() personajes: Personaje[] = []; //@Input('data'): el nombre dentro del parentesis sirve para cambiar del nombre del valor que trae del padre, para luego llamarlo
                                   //desde el html con ese nuevo nombre
 
  get personajes(){
    return this.dbzService.personajes;
  }

  constructor(private dbzService:DbzService){}
}

import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
})
export class AgregarComponent {

  @Input() nuevo:Personaje={
    nombre: '',
    poder: 0,
  }
  constructor(private dbzService: DbzService){}
  //@Output() onNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter(); //@Output: Sirve para emitir eventos

  agregar(/*event:any*/){
    //event.preventDefault();
    if(this.nuevo.nombre.trim().length===0){
      return;
    }
    console.log(this.nuevo);

    //this.onNuevoPersonaje.emit(this.nuevo);
    this.dbzService.agregarPersonaje(this.nuevo);
    //this.personajes.push(this.nuevo); //Función que añade el personaje metido por fomrulario al array de personajes

    this.nuevo ={
      nombre: '',
      poder: 0,
    }


  }
}

import { Injectable } from "@angular/core";
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService{
    
    private _personajes: Personaje[] = [
        {
          nombre:'Goku',
          poder:30000,
        },
        {
          nombre:'Vegeta',
          poder:20000,
        }
    
      ];

      get personajes():Personaje[]{
        return [...this._personajes]; //Objeto mandado por referencia. El [...] significa spread, divide el array por cada uno de los objetos que contiene
      }

    constructor(){
        console.log("Servicio inicializado");
    }

    agregarPersonaje(argumento:Personaje){
        this._personajes.push(argumento);
    }
}
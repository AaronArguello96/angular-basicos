import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  
})

export class ListadoComponent{
  heroes: string[] = ['Spiderman', 'Ironman', 'Captain America', 'Thor','Hulk'];

  heroeBorrado: string = ''; //Tambien se puede definir esta propiedad como undefined con | undefined

  borrarHeroe(){

    //Creamos la variable heroeBorrado para guardar ahí el resultado de la funcion
    //borrarHeroe. Se añade la condición || al pop ya que este devuelve un string
    //si encuentra un elemento en la última posición o un undefined si no encuentra nada
    this.heroeBorrado = this.heroes.pop() || '';

  }

}

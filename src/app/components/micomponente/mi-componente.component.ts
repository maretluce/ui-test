import { Component, DoCheck } from '@angular/core';

@Component({
  selector: 'mi-componente',
  templateUrl: './mi-componente.component.html'
  /*templateUrl: './app.component.html',*/
  /*styleUrls: ['./scss/app.component.scss']*/
})

export class MiComponente implements DoCheck {

  public titulo: string;
  public comentario: string;
  public year: number;
  
  constructor(){
    this.titulo = "Hola mundo, soy MI COMPONENTE";
    this.comentario = "Este es el primer componente";
    this.year = 2020;
    
    console.log('Componente mi-componente cargado!!');


  }

  ngDoCheck(){
    console.log('DoCheck ejecutado');
  }

  cambiarTitulo() {
    this.titulo = "Nuevo titulo";
  }

}
 
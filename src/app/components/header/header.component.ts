import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./../../scss/app.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {

  constructor() { 

  }

  ngOnInit(): void {
  }

  ngDoCheck(){
    console.log('DoCheck ejecutado');
  }

  /*hamburguesa*/
  menuMobile(obj) {
    obj.className += ' open';
    document.querySelector('#menuPpal').className += ' show';
    //obj.target.attributes.id.value;
    //this.titulo = "Nuevo titulo";
  }

  /*hamburguesa*/
  /*$('#burger').on('click', function(){
    $(this).toggleClass('open');
    $('#menuPpal').toggleClass('show');
  });*/


}

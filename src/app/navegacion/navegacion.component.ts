import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navegacion',
  template: `
 
    <a routerLink="/mapa">Mapa</a>
<a routerLink="/help">Ayuda</a>
<a routerLink="/sobremi">Sobre mí</a>
  `,
  styles: []
})
export class NavegacionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

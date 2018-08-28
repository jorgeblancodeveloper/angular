import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-helppage',
    template: `
    <div class="info">
    <h3>Aplicación de pruebas</h3>
    <div><p>No es más que una pequeña aplicacion para conocer las farmacias abiertas en Rivas Vaciamadrid, realizada como parte de mi aprendizaje de Angular</p>
    </div>
    </div>
  `,
    styles: []
})
export class HelppageComponent implements OnInit {

    constructor() {}

    ngOnInit() {}

}
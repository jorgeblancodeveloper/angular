
import { Component, OnInit } from '@angular/core';
//import { features } from ' ../../farmacias.json';



import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse } from '@angular/common/http';


//console.log(features);
@Component({
    selector: 'mapa',
    templateUrl: './mapa.component.html',
    styles: ['agm-map { height: 300px;}']
})


export class mapaComponent implements OnInit {
//puntos = features;
mostrar : boolean;
values = [
  { id: 1, name: "Todos" },
  { id: 2, name: "Oeste" },
  { id: 3, name: "Centro" },
  { id: 4, name: "Este" }
];
filtro = "todos";
 public onChange(event): void {  // event will give you full breif of action
    const newVal = event.target.value;
    console.log(newVal);
    this.filtro=newVal;
  }

clickedMarker(este){
	console.log("clicked" + este);
	this.mostrar = true;
	this.nombre = this.farmacias.features[este].properties.NOMBRE;
	this.telefono = this.farmacias.features[este].properties.TELEFONO;
	this.barrio = this.farmacias.features[este].properties.BARRIO;
}
    constructor (private httpService: HttpClient) { }
  farmacias: string [];


    ngOnInit() { 
    	 this.httpService.get('./assets/farmacias.json').subscribe(
      data => {
        this.farmacias = data as string [];	 // FILL THE ARRAY WITH DATA.
          console.log(this);
          
      },
      (err: HttpErrorResponse) => {
        console.log (err.message);
      }
    );

    }

}


import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

declare
var require: any;

@Component({
    selector: 'mapa',
    templateUrl: './mapa.component.html',
    styles: ['agm-map { height: 300px;}']
})


export class mapaComponent implements OnInit {

    mostrar: boolean;
    nombre = "";
    telefono = "";
    barrio = "";
    values = [
        { id: 1, name: "Barrio: Todos", value: "Todos" },
        { id: 2, name: "Barrio: Oeste", value: "Oeste" },
        { id: 3, name: "Barrio: Centro", value: "Centro" },
        { id: 4, name: "Barrio: Este", value: "Este" }
    ];
    lat = 40.353861306107959;
    lon = -3.534167475411653;
    zoom = 12;
    puntos: any;
    farmacias: any;

    filtro = "todos";
    public onChange(event): void { // event will give you full breif of action
        var newVal = event.target.value;
        this.filtro = newVal;

        if (newVal != "Todos") {
            this.puntos = this.farmacias.features.filter(item => item.properties.BARRIO == newVal);
        }
    }

    private clickedMarker(este) {
        if (this.farmacias) {
            this.lat = this.farmacias.features[este].geometry.coordinates[1];
            this.lon = this.farmacias.features[este].geometry.coordinates[0];
            this.zoom = 14;
            this.mostrar = true;
            this.nombre = this.farmacias.features[este].properties.NOMBRE;
            this.telefono = this.farmacias.features[este].properties.TELEFONO;
            this.barrio = this.farmacias.features[este].properties.BARRIO;

        }
    };
    reinit() {
        this.lat = 40.353861306107959;
        this.lon = -3.534167475411653;
        this.zoom = 12;
        this.mostrar = false;
    };

    private icon = {
        url: require('../../cruz.png'),
        scaledSize: {
            height: 30,
            width: 30
        }


    };
    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.http.get('./assets/farmacias.json').subscribe(data => {

            this.farmacias = data;

        });



    }

}
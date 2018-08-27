import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule } from '@angular/forms';

import { } from '@types/googlemaps';
import { AppComponent }  from './app.component';

import { AppRoutingModule } from './app-routing.module';
import { DataService } from './shared/data.service';
import { HelppageComponent } from './helppage/helppage.component';
import { NavegacionComponent } from './navegacion/navegacion.component';
import { SobremiComponent } from './sobremi/sobremi.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  imports:      [ BrowserModule,   HttpClientModule ,FormsModule, AppRoutingModule,AgmCoreModule.forRoot({
      apiKey: 'AIzaSyB4rG7ZcdKMgJfyc6gEx7IlUelwo6atg6M',libraries: ["places"]
    }) ], 
  declarations: [ AppComponent, AppRoutingModule.components, HelppageComponent, NavegacionComponent, SobremiComponent ],
  providers:    [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
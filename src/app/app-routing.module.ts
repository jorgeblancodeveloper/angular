import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { mapaComponent } from './mapa/mapa.component';
import { HelppageComponent } from './helppage/helppage.component';
import { SobremiComponent } from './sobremi/sobremi.component';

const routes: Routes = [
  { path: '',  pathMatch:'full', redirectTo: '/home' },
  { path: 'home',  component: HomeComponent },
  { path: 'mapa', component: mapaComponent },
   { path: 'help', component: HelppageComponent },
    { path: 'sobremi', component: SobremiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static components = [ HomeComponent, mapaComponent, HelppageComponent ];
}

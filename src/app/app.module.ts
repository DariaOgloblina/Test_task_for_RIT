import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import {HttpClientModule} from "@angular/common/http";

import { AppComponent } from './app.component';
import {PlanetInfoComponent} from "./planetInfo/planetInfo.component";
import {PlanetsComponent} from "./planets/planets.component";
import {FormsModule} from "@angular/forms";
import {AllInfoAboutPlanetComponent} from "./allInfoAboutPlanet/allInfoAboutPlanet.component";
import {ResidentComponent} from "./resident/resident.component";
import {MailPlanetInfoBlockComponent} from "./mailPlanetInfoBlock/mailPlanetInfoBlock.component";
import {FilmComponent} from "./film/film.component";


const appRoutes: Routes = [
  {path: '', component: PlanetsComponent},
  {path: 'info/:id', component: AllInfoAboutPlanetComponent},
  {path: '**', redirectTo: '', pathMatch: 'full'}
]


@NgModule({
  declarations: [
    AppComponent,
    PlanetInfoComponent,
    PlanetsComponent,
    AllInfoAboutPlanetComponent,
    ResidentComponent,
    MailPlanetInfoBlockComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

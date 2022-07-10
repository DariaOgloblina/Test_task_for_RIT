import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.css']
})
export class PlanetsComponent {
  response: any;
  arrayOfPlanets = [];
  page:number = 1;
  buttonNext:boolean = true;
  buttonPrev:boolean = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
   this.getOtherPage();
  }

  getOtherPage(page = 1){
    this.http.get('https://swapi.dev/api/planets/?page=' + page)
      .subscribe((response) => {
        this.response = response;
        this.arrayOfPlanets = this.response.results;
        this.buttonNext = !!this.response.next;
        this.buttonPrev = !!this.response.previous;
        this.page = page;
      })
  }
}

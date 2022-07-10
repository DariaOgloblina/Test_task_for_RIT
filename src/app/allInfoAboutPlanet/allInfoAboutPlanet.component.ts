import {Component, Input} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-allInfoAboutPlanet',
  templateUrl: './allInfoAboutPlanet.component.html',
  styleUrls: ['./allInfoAboutPlanet.component.css']
})
export class AllInfoAboutPlanetComponent {
  @Input() planet: any = {};
  arrayOfResidents: any;
  filteredArrayOfResidents: any;
  arrayOfFilms: any;
  response:any;
  id: number = 0;
  genderFilter:string ='';

  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = +params['id'];
    });
    this.http.get('https://swapi.dev/api/planets/' + this.id)
      .subscribe((response) => {
        this.response = response;
        this.arrayOfResidents = this.getInfoAbout(true);
        this.arrayOfFilms = this.getInfoAbout(false);
      })
  }

  getInfoAbout(ifResident: boolean){
    let templateArray: Object[] = [];
    if(ifResident){
      this.response.residents.map((urlItem: string) =>{
        this.http.get(urlItem)
          .subscribe((person) => {
            templateArray.push(person);
          })
      });
      this.filteredArrayOfResidents = templateArray;
    }else {
      this.response.films.map((urlItem: string) =>{
        this.http.get(urlItem)
          .subscribe((film) => {
            templateArray.push(film);
          })
      });
    }
    return templateArray;
  }

  filterArrayOfResidents() {
    if (this.genderFilter) {
      let templateArray: any[] = [];
      this.arrayOfResidents.map((person: { gender: string; }) => {
        if (person.gender === this.genderFilter) {
          templateArray.push(person);
        }
      })
      this.filteredArrayOfResidents = templateArray;
    }else {
      this.filteredArrayOfResidents = this.arrayOfResidents;
    }
  }

}

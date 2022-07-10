import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-film',
  templateUrl: './film.component.html'
})
export class FilmComponent {
  @Input() film: any;
}

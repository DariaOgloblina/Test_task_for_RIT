import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-planetInfo',
  templateUrl: './planetInfo.component.html',
  styleUrls: ['./planetInfo.component.css']
})
export class PlanetInfoComponent {
  @Input() planet: any = {};
  @Input() id: any = 1;
}

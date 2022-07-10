import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-mainPlanetInfoBlock',
  templateUrl: './mailPlanetInfoBlock.component.html'
})
export class MailPlanetInfoBlockComponent {
  @Input() planet: any;
}

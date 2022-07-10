import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-resident',
  templateUrl: './resident.component.html'
})
export class ResidentComponent {
  @Input() resident: any;
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-vitesse-test',
  templateUrl: './vitesse-test.component.html',
  styleUrls: ['./vitesse-test.component.scss']
})
export class VitesseTestComponent {
  @Input() velocities: string;
}

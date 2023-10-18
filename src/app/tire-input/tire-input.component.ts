import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tire-input',
  templateUrl: './tire-input.component.html',
  styleUrls: ['./tire-input.component.scss']
})
export class TireInputComponent {
  @Input() tireLocation: string;
}

import { Component, HostBinding, Input } from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.component.html',
  styleUrls: ['./logo.component.scss']
})
export class LogoComponent {

  @Input() color: string;
  
  @HostBinding('style.fill') get f() {
    return this.color ? this.color : '';
  }
}

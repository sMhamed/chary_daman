import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  user: any;
  collapsed = true;
  
  constructor() {
    this.user =JSON.parse(localStorage.getItem('session') ?? '??')
  }
}

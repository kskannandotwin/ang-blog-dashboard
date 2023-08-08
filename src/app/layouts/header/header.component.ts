import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userEmail: string | undefined;

  ngOnInit() {
    this.userEmail = JSON.parse(localStorage.getItem('user') || '{}').email;
  }
}

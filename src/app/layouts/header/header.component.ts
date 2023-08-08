import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  userEmail: string | undefined;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.userEmail = JSON.parse(localStorage.getItem('user') || '{}').email;
  }

  onLogOut() {
    this.authService.logOut();
  }
}

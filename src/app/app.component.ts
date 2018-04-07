import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  email: string;
  constructor() {
    this.email = '';
  }

  changeEmail(email: string) {
    this.email = email;
  }
}

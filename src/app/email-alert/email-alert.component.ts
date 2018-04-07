import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-email-alert',
  templateUrl: './email-alert.component.html',
  styleUrls: ['./email-alert.component.css']
})
export class EmailAlertComponent implements OnInit {
  @Input() email: string;
  private readonly CORRECT_EMAIL: string = 'alwafy6@gmail.com';
  constructor() {
    this.email = '';
  }

  ngOnInit() {
  }

  checkEmail(): boolean {
    if (this.email.trim() === '') {
      return null;
    }
    return this.email === this.CORRECT_EMAIL;
  }

}

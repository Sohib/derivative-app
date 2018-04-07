import { Component, OnInit, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css']
})
export class EmailFormComponent implements OnInit {
  @Output() emailHasChanged: EventEmitter<String>;
  constructor() {
    this.emailHasChanged = new EventEmitter();
  }

  ngOnInit() {
  }

  submit(emailInput: HTMLInputElement): boolean {
    this.emailHasChanged.emit(emailInput.value);
    return false;
  }

}

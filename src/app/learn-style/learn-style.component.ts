import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-style',
  templateUrl: './learn-style.component.html',
  styleUrls: ['./learn-style.component.css']
})
export class LearnStyleComponent implements OnInit {

  style = {
    'font-weight': 'bolder',
    'text-align': 'center',
    'font-size': '4em',
    'font-family': 'Garamond'
  };
  color: string;
  size: number;
  public isBorderd: boolean;
  borderdObject: {
    bordered: boolean
  };
  content = 'Some Text';
  constructor() {
  }

  ngOnInit() {
    this.isBorderd = true;
    this.toggleBorder();
  }

  applyStyle(color: HTMLInputElement, size: HTMLInputElement) {
    this.color = color.value;
    this.size = Number(size.value);
    return false;
  }

  toggleBorder(): void {
    this.isBorderd = !this.isBorderd;
    this.borderdObject = {
      bordered: this.isBorderd
    };
  }
}

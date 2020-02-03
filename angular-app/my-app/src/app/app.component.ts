import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  test: string[];

  constructor() {
    let strings = ['one', 'two', 'three'];
    this.test = [...strings, 'four'];
  }
}

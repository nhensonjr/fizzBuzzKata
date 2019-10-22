import { Component } from '@angular/core';
import { ConsoleOutputService } from './console-output.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'fizzbuzz';

  constructor(private outputService: ConsoleOutputService) {
    this.outputService.fizzBuzzKata();
  }
}

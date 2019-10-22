import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ConsoleOutputService } from './console-output.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ConsoleOutputService],
  bootstrap: [AppComponent]
})
export class AppModule { }

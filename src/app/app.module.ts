import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { MainModule } from './components/main/main.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, MainModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

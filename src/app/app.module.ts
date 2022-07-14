import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { TableModule } from './components/table/table.module';
import { DiceModule } from './components/dice/dice.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, DiceModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';

import { TableModule } from './components/table/table.module';
import { DicesModule } from './components/dices/dices.module';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, DicesModule, TableModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

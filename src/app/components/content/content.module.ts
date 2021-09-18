import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContentComponent } from "./content.component";

import { DiceModule } from "../dice/dice.module";
import { TableModule } from "../table/table.module";


@NgModule({
  declarations: [ContentComponent],
  exports: [ContentComponent],
  imports: [
    CommonModule,
    DiceModule,
    TableModule
  ]
})
export class ContentModule { }

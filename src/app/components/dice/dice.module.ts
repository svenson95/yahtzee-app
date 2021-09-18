import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiceComponent } from "./dice.component";


@NgModule({
  declarations: [DiceComponent],
  exports: [DiceComponent],
  imports: [
    CommonModule
  ]
})
export class DiceModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiceComponent } from "src/app/components/dice/dice.component";


@NgModule({
  declarations: [DiceComponent],
  exports: [DiceComponent],
  imports: [
    CommonModule
  ]
})
export class DiceModule { }

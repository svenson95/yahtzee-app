import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DicesComponent } from './dices.component';
import { DiceModule } from './dice/dice.module';

@NgModule({
  declarations: [DicesComponent],
  exports: [DicesComponent],
  imports: [CommonModule, DiceModule],
})
export class DicesModule {}

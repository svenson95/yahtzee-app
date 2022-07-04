import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainComponent } from './main.component';

import { DiceModule } from 'src/app/components/dice/dice.module';
import { TableModule } from 'src/app/components/table/table.module';

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  imports: [CommonModule, DiceModule, TableModule],
})
export class MainModule {}

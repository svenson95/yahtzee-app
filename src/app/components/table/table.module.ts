import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableComponent } from './table.component';
import { ScoreButtonModule } from './score-button/score-button.module';

@NgModule({
  declarations: [TableComponent],
  exports: [TableComponent],
  imports: [CommonModule, ScoreButtonModule],
})
export class TableModule {}

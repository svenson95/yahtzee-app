import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScoreButtonComponent } from "./score-button.component";


@NgModule({
  declarations: [ScoreButtonComponent],
  exports: [ScoreButtonComponent],
  imports: [
    CommonModule
  ]
})
export class ScoreButtonModule { }

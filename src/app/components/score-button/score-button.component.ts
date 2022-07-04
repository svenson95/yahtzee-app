import { Component, Input } from '@angular/core';

import { ScoreService } from '../../services/score.service';
import { RoundService } from '../../services/round.service';

@Component({
  selector: 'ytz-score-button',
  templateUrl: './score-button.component.html',
  styleUrls: ['./score-button.component.scss'],
})
export class ScoreButtonComponent {
  @Input() key: string;
  @Input() value: number;
  @Input() disabled: boolean;

  constructor(private score: ScoreService, private round: RoundService) {}

  get addedPoints() {
    return this.score.addedPoints;
  }

  onSavePoints(): void {
    this.score.savePoints(this.key);
    this.round.resetTry();
  }
}

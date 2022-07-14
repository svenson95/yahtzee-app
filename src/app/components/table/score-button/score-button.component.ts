import { Component, Inject, Input } from '@angular/core';
import { GameService } from 'src/app/services/dice.service';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'ytz-score-button',
  templateUrl: './score-button.component.html',
  styleUrls: ['./score-button.component.scss'],
})
export class ScoreButtonComponent {
  @Input() key: string;
  @Input() value: number;
  @Input() disabled: boolean;

  constructor(@Inject(ScoreService) public score: ScoreService, @Inject(GameService) private dice: GameService) {}

  onSavePoints(): void {
    this.score.savePoints(this.key);
    this.dice.resetTry();
  }
}

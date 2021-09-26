import { Component, Inject, Input, OnInit } from '@angular/core';

import { ScoreService } from "../../services/score.service";
import { RoundService } from "../../services/round.service";

@Component({
  selector: 'ytz-score-button',
  templateUrl: './score-button.component.html',
  styleUrls: ['./score-button.component.scss']
})
export class ScoreButtonComponent implements OnInit {

  @Input() key: string;
  @Input() value: number;
  @Input() disabled: boolean;

  constructor(
    @Inject(ScoreService) private score: ScoreService,
    @Inject(RoundService) private round: RoundService
  ) { }

  get addedPoints() {
    return this.score.addedPoints;
  }

  ngOnInit(): void {
  }

  onSavePoints(): void {
    this.score.savePoints(this.key);
    this.round.resetTry();
  }

}

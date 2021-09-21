import { Component, Input, OnInit } from '@angular/core';

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

  constructor(public score: ScoreService, private round: RoundService) { }

  ngOnInit(): void {
  }

  onSavePoints(): void {
    this.score.savePoints(this.key);
    this.round.resetTry();
  }

}

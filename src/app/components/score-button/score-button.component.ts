import { Component, Input, OnInit } from '@angular/core';
import { ScoreService } from "../../services/score.service";

@Component({
  selector: 'ytz-score-button',
  templateUrl: './score-button.component.html',
  styleUrls: ['./score-button.component.scss']
})
export class ScoreButtonComponent implements OnInit {

  @Input() key!: string;
  @Input() value!: number;

  constructor(public score: ScoreService) { }

  ngOnInit(): void {
  }

}

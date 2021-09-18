import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { ScoreService } from "../../services/score.service";

@Component({
  selector: 'ytz-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit {

  @Input() dices!: number[];

  constructor(public score: ScoreService) { }

  ngOnInit(): void {
  }
}

import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() dices: number[];

  constructor(public score: ScoreService) {}
}

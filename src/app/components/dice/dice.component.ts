import { ChangeDetectionStrategy, Component, Inject, Input } from '@angular/core';

import { GameService } from '../../services/dice.service';

@Component({
  selector: 'ytz-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceComponent {
  @Input() diceNumber: number;
  @Input() value: number;

  constructor(@Inject(GameService) public dice: GameService) {}

  get diceImage() {
    return 'assets/images/dice-' + this.value + '.png';
  }

  get isHolding() {
    return this.dice.holdValues[this.diceNumber - 1];
  }
}

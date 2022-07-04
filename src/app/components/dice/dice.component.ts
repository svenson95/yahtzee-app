import { ChangeDetectionStrategy, Component, Inject, Input, OnInit } from '@angular/core';

import { DiceService } from '../../services/dice.service';

@Component({
  selector: 'ytz-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DiceComponent {
  @Input() diceNumber: number;
  @Input() value: number;

  constructor(@Inject(DiceService) public dice: DiceService) {}

  get diceImage() {
    return 'assets/images/dice-' + this.value + '.png';
  }

  get isHolding() {
    return this.dice.holdValues[this.diceNumber - 1];
  }

  holdDice(diceNumber: number) {
    if (!this.dice.gameStarted) return;
    this.dice.holdValues[diceNumber - 1] = !this.dice.holdValues[diceNumber - 1];
  }
}

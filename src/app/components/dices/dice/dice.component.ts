import { Component, Inject, Input } from '@angular/core';
import { Dice } from 'src/app/models/dice';

import { GameService } from '../../../services/game.service';

@Component({
  selector: 'ytz-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
})
export class DiceComponent {
  @Input() dice: Dice;

  constructor(@Inject(GameService) public game: GameService) {}

  get diceImage() {
    return 'assets/images/dice-' + this.dice.value + '.png';
  }

  get isHolding() {
    return this.game.holdValues[this.dice.number - 1];
  }
}

import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

import { DiceService } from "../../services/dice.service";

@Component({
  selector: 'ytz-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DiceComponent implements OnInit {

  @Input() diceNumber: number;
  @Input() value: number;

  constructor(public dice: DiceService) { }

  ngOnInit(): void {
  }

  get diceImage() {
    return "assets/images/dice-" + this.value + ".png";
  }

  holdDice(diceNumber: number) {
    if (!this.dice.gameStarted) return;
    this.dice.holdValues[diceNumber - 1] = !this.dice.holdValues[diceNumber - 1];
  }

  isHolding(diceNumber: number) {
    return this.dice.holdValues[diceNumber - 1]
  }
}

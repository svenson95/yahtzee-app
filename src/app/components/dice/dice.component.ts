import { Component, Input, OnInit } from '@angular/core';

import { DiceService } from "../../services/dice.service";

@Component({
  selector: 'ytz-dice',
  templateUrl: './dice.component.html',
  styleUrls: ['./dice.component.scss']
})
export class DiceComponent implements OnInit {

  @Input() diceNumber!: number;
  @Input() value!: number;

  constructor(public dice: DiceService) { }

  ngOnInit(): void {
  }

  image() {
    return "assets/images/dice-" + this.value + ".png";
  }

  holdDice(value: number) {
    if (!this.dice.gameStarted) return;

    if (value === 1) this.dice.holdOne = !this.dice.holdOne;
    if (value === 2) this.dice.holdTwo = !this.dice.holdTwo;
    if (value === 3) this.dice.holdThree = !this.dice.holdThree;
    if (value === 4) this.dice.holdFour = !this.dice.holdFour;
    if (value === 5) this.dice.holdFive = !this.dice.holdFive;
  }

  isHolding() {
    return (
      (this.diceNumber === 1 && this.dice.holdOne) ||
      (this.diceNumber === 2 && this.dice.holdTwo) ||
      (this.diceNumber === 3 && this.dice.holdThree) ||
      (this.diceNumber === 4 && this.dice.holdFour) ||
      (this.diceNumber === 5 && this.dice.holdFive)
    )
  }
}

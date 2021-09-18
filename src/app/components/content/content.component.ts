import { Component, OnInit, ViewChild } from '@angular/core';

import { DiceService } from "../../services/dice.service";

@Component({
  selector: 'ytz-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('diceContainer')
  diceContainer: any;

  constructor(public dice: DiceService) { }

  ngOnInit(): void {
  }

  rollDices(dices: Element): void {
    if (!this.dice.gameStarted) this.dice.gameStarted = true;

    for (let i = 0; i < dices.children.length; i++) {
      const dice = dices.children[i];
      this.animate(dice, i);
    }
  }

  animate(element: Element, index: number) {
    if (
      (index === 0 && !this.dice.holdOne) ||
      (index === 1 && !this.dice.holdTwo) ||
      (index === 2 && !this.dice.holdThree) ||
      (index === 3 && !this.dice.holdFour) ||
      (index === 4 && !this.dice.holdFive)
    ) {
      element.classList.add('shake');
    }

    setTimeout(() => {
      element.classList.remove('shake');
      this.updateDiceValues();
    }, 1000);
  }

  getRandomInt(): number {
    const min = Math.ceil(1);
    const max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateDiceValues(): void {
    if (!this.dice.holdOne) this.dice.one = this.getRandomInt();
    if (!this.dice.holdTwo) this.dice.two = this.getRandomInt();
    if (!this.dice.holdThree) this.dice.three = this.getRandomInt();
    if (!this.dice.holdFour) this.dice.four = this.getRandomInt();
    if (!this.dice.holdFive) this.dice.five = this.getRandomInt();
  }
}

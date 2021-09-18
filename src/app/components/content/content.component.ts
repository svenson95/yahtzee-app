import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DiceService } from "../../services/dice.service";
import { ScoreService } from "../../services/score.service";

@Component({
  selector: 'ytz-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('diceContainer', { static: true }) diceContainer!: ElementRef;
  private SHAKE_DURATION = 1000;

  constructor(public dice: DiceService, private score: ScoreService) { }

  ngOnInit(): void {
  }

  get diceValues() {
    return [...this.dice.values];
  }

  rollDices(dices: Element): void {
    if (!this.dice.gameStarted) this.dice.gameStarted = true;

    for (let i = 0; i < dices.children.length; i++) {
      const dice = dices.children[i];
      this.animate(dice, i);
    }

    setTimeout(() => {
      this.updateDiceValues();
      this.score.addedPoints = undefined;
      this.score.calculateScores(this.dice.values);
    }, this.SHAKE_DURATION);
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

    setTimeout(() => element.classList.remove('shake'), this.SHAKE_DURATION);
  }

  getRandomInt(): number {
    const min = Math.ceil(1);
    const max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateDiceValues(): void {
    if (!this.dice.holdOne) this.dice.values[0] = this.getRandomInt();
    if (!this.dice.holdTwo) this.dice.values[1] = this.getRandomInt();
    if (!this.dice.holdThree) this.dice.values[2] = this.getRandomInt();
    if (!this.dice.holdFour) this.dice.values[3] = this.getRandomInt();
    if (!this.dice.holdFive) this.dice.values[4] = this.getRandomInt();
  }
}

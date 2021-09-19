import { Component, OnInit, ViewChild } from '@angular/core';

import { DiceService } from "../../services/dice.service";
import { ScoreService } from "../../services/score.service";

@Component({
  selector: 'ytz-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('diceContainer') diceContainer!: any;

  private SHAKE_DURATION = 1000;
  private isRolling = false;

  constructor(public dice: DiceService, public score: ScoreService) { }

  ngOnInit(): void {
  }

  get diceValues() {
    return [...this.dice.values];
  }

  startGame() {
    this.dice.gameStarted = true;
    this.rollDices(this.diceContainer.nativeElement);
  }

  rollDices(dices: Element): void {
    if (this.isRolling) return;
    this.isRolling = true;

    for (let i = 0; i < dices.children.length; i++) {
      const dice = dices.children[i];
      this.animate(dice, i);
    }

    setTimeout(() => {
      this.isRolling = false;
      this.dice.updateDiceValues();
      this.score.addedPoints = undefined;
      this.score.calculateScores(this.dice.values);
    }, this.SHAKE_DURATION);
  }

  private animate(element: Element, index: number) {
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
}

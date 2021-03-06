import { Inject, Injectable } from '@angular/core';

import { ScoreService } from './score.service';

const INITIAL_HOLD_VALUES = [false, false, false, false, false];

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public isStarted = false;
  public isRolling = false;
  public tryCounter = 0;
  public values: number[] = [1, 2, 3, 4, 5];
  public holdValues: boolean[] = [...INITIAL_HOLD_VALUES];

  constructor(@Inject(ScoreService) private score: ScoreService) {}

  getRandomInt(): number {
    const min = Math.ceil(1);
    const max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  roll(dices: Element) {
    if (this.isRolling) return;
    this.isRolling = true;

    for (let i = 0; i < dices.children.length; i++) {
      const dice = dices.children[i];
      this.animate(dice, i);
    }

    setTimeout(() => {
      this.isRolling = false;
      this.updateDiceValues();
      this.score.points = undefined;
      this.score.calculateScores(this.values);
    }, 900);
  }

  hold(diceNumber: number) {
    if (!this.isStarted) return;
    this.holdValues[diceNumber - 1] = !this.holdValues[diceNumber - 1];
  }

  updateDiceValues(): void {
    this.values.forEach((value, index) => {
      if (this.holdValues[index]) return;
      this.values[index] = this.getRandomInt();
    });
  }

  animate(element: Element, index: number) {
    const img = element.children[0];
    if (!this.holdValues[index]) img.classList.add('shake');
    setTimeout(() => img.classList.remove('shake'), 900);
  }

  nextTry() {
    this.tryCounter += 1;
  }

  resetTry() {
    this.tryCounter = 0;
    this.holdValues = [...INITIAL_HOLD_VALUES];
  }
}

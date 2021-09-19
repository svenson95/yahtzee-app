import { Injectable } from '@angular/core';
import { ScoreService } from "./score.service";

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  public gameStarted = false;
  public isRolling = false;
  public values: number[] = [1, 2, 3, 4, 5];
  public holdValues: boolean[] = [false, false, false, false, false];

  constructor(private score: ScoreService) { }

  getRandomInt(): number {
    const min = Math.ceil(1);
    const max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  rollDices(dices: Element) {
    if (this.isRolling) return;
    this.isRolling = true;

    for (let i = 0; i < dices.children.length; i++) {
      const dice = dices.children[i];
      this.animate(dice, i);
    }

    setTimeout(() => {
      this.isRolling = false;
      this.updateDiceValues();
      this.score.addedPoints = undefined;
      this.score.calculateScores(this.values);
    }, 900);
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
}

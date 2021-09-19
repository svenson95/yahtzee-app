import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  public gameStarted = false;
  public values: number[] = [1, 2, 3, 4, 5];
  public holdValues: boolean[] = [false, false, false, false, false];

  constructor() { }

  getRandomInt(): number {
    const min = Math.ceil(1);
    const max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateDiceValues(): void {
    this.values.forEach((value, index) => {
      if (this.holdValues[index]) return;
      this.values[index] = this.getRandomInt();
    });
  }
}

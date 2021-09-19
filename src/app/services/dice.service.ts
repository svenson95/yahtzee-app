import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  public gameStarted = false;
  public values: number[] = [1, 2, 3, 4, 5];

  public holdOne = false;
  public holdTwo = false;
  public holdThree = false;
  public holdFour = false;
  public holdFive = false;

  constructor() { }

  getRandomInt(): number {
    const min = Math.ceil(1);
    const max = Math.floor(6);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  updateDiceValues(): void {
    if (!this.holdOne) this.values[0] = this.getRandomInt();
    if (!this.holdTwo) this.values[1] = this.getRandomInt();
    if (!this.holdThree) this.values[2] = this.getRandomInt();
    if (!this.holdFour) this.values[3] = this.getRandomInt();
    if (!this.holdFive) this.values[4] = this.getRandomInt();
  }
}

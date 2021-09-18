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
}

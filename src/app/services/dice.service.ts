import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiceService {

  public gameStarted = false;

  public one: number = 1;
  public two: number = 2;
  public three: number = 3;
  public four: number = 4;
  public five: number = 5;

  public holdOne = false;
  public holdTwo = false;
  public holdThree = false;
  public holdFour = false;
  public holdFive = false;

  constructor() { }
}

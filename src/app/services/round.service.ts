import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoundService {

  public current = 1;
  public try = 0;

  constructor() { }

  nextRound() {
    this.current += 1;
  }

  resetRound() {
    this.current = 1;
  }

  nextTry() {
    this.try += 1;
  }

  resetTry() {
    this.try = 0;
  }
}

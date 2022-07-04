import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RoundService {
  public current = 1;

  public tryCounter = 0;

  nextRound() {
    this.current += 1;
  }

  resetRound() {
    this.current = 1;
  }

  nextTry() {
    this.tryCounter += 1;
  }

  resetTry() {
    this.tryCounter = 0;
  }
}

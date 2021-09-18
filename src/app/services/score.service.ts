import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public addedPoints: string | undefined;

  // Round score
  public acesValue = 0;
  public twosValue = 0;
  public threesValue = 0;
  public foursValue = 0;
  public fivesValue = 0;
  public sixesValue = 0;
  public threeKindValue = 0;
  public fourKindValue = 0;
  public fullHouseValue = 0;
  public smallStraightValue = 0;
  public largeStraightValue = 0;

  // Total score
  public acesScore = 0;
  public twosScore = 0;
  public threesScore = 0;
  public foursScore = 0;
  public fivesScore = 0;
  public sixesScore = 0;
  public threeKindScore = 0;
  public fourKindScore = 0;
  public fullHouseScore = 0;
  public smallStraightScore = 0;
  public largeStraightScore = 0;

  constructor() { }

  calculateScores(dices: number[]): void {
    // Upper section
    this.acesValue = (
      dices[0] === 1 ||
      dices[1] === 1 ||
      dices[2] === 1 ||
      dices[3] === 1 ||
      dices[4] === 1
    ) ? 1 : 0;

    this.twosValue = (
      dices[0] === 2 ||
      dices[1] === 2 ||
      dices[2] === 2 ||
      dices[3] === 2 ||
      dices[4] === 2
    ) ? 2 : 0

    this.threesValue = (
      dices[0] === 3 ||
      dices[1] === 3 ||
      dices[2] === 3 ||
      dices[3] === 3 ||
      dices[4] === 3
    ) ? 3 : 0

    this.foursValue = (
      dices[0] === 4 ||
      dices[1] === 4 ||
      dices[2] === 4 ||
      dices[3] === 4 ||
      dices[4] === 4
    ) ? 4 : 0

    this.fivesValue = (
      dices[0] === 5 ||
      dices[1] === 5 ||
      dices[2] === 5 ||
      dices[3] === 5 ||
      dices[4] === 5
    ) ? 5 : 0

    this.sixesValue = (
      dices[0] === 6 ||
      dices[1] === 6 ||
      dices[2] === 6 ||
      dices[3] === 6 ||
      dices[4] === 6
    ) ? 6 : 0

    // Lower section
    this.threeKindValue = (
      dices.filter(d => d === 1).length === 3 ||
      dices.filter(d => d === 2).length === 3 ||
      dices.filter(d => d === 3).length === 3 ||
      dices.filter(d => d === 4).length === 3 ||
      dices.filter(d => d === 5).length === 3 ||
      dices.filter(d => d === 6).length === 3
    ) ? (this.getDuplicate(dices) * 3) : 0;

    this.fourKindValue = (
      dices.filter(d => d === 1).length === 4 ||
      dices.filter(d => d === 2).length === 4 ||
      dices.filter(d => d === 3).length === 4 ||
      dices.filter(d => d === 4).length === 4 ||
      dices.filter(d => d === 5).length === 4 ||
      dices.filter(d => d === 6).length === 4
    ) ? (this.getDuplicate(dices) * 4) : 0;

    this.fullHouseValue = (
      dices.filter(d => d === 1).length === 5 ||
      dices.filter(d => d === 2).length === 5 ||
      dices.filter(d => d === 3).length === 5 ||
      dices.filter(d => d === 4).length === 5 ||
      dices.filter(d => d === 5).length === 5 ||
      dices.filter(d => d === 6).length === 5
    ) ? 25 : 0;

    this.smallStraightValue = (
      (
        dices.find(d => d === 1) &&
        dices.find(d => d === 2) &&
        dices.find(d => d === 3) &&
        dices.find(d => d === 4)
      ) ||
      (
        dices.find(d => d === 2) &&
        dices.find(d => d === 3) &&
        dices.find(d => d === 4) &&
        dices.find(d => d === 5)
      ) ||
      (
        dices.find(d => d === 3) &&
        dices.find(d => d === 4) &&
        dices.find(d => d === 5) &&
        dices.find(d => d === 6)
      )
    ) ? 30 : 0;

    this.largeStraightValue = (
      (
        dices.find(d => d === 1) &&
        dices.find(d => d === 2) &&
        dices.find(d => d === 3) &&
        dices.find(d => d === 4) &&
        dices.find(d => d === 5)
      ) ||
      (
        dices.find(d => d === 2) &&
        dices.find(d => d === 3) &&
        dices.find(d => d === 4) &&
        dices.find(d => d === 5) &&
        dices.find(d => d === 6)
      )
    ) ? 40 : 0;
  }

  savePoints(key: string): void {
    if (this.addedPoints !== undefined) return;
    this.addedPoints = key;

    // Upper section
    if (key === 'aces') {
      this.acesScore += this.acesValue;
    } else if (key === 'twos') {
      this.twosScore += this.twosValue;
    } else if (key === 'threes') {
      this.threesScore += this.threesValue;
    } else if (key === 'fours') {
      this.foursScore += this.foursValue;
    } else if (key === 'fives') {
      this.fivesScore += this.fivesValue;
    } else if (key === 'sixes') {
      this.sixesScore += this.sixesValue;
    }

    // Lower section
    if (key === 'threeKind') {
      this.threeKindScore += this.threeKindValue;
    } else if (key === 'fourKind') {
      this.fourKindScore += this.fourKindValue;
    } else if (key === 'fullHouse') {
      this.fullHouseScore += this.fullHouseValue;
    } else if (key === 'smallStraight') {
      this.smallStraightScore += this.smallStraightValue;
    } else if (key === 'largeStraight') {
      this.largeStraightScore += this.largeStraightValue;
    }
  }

  private getDuplicate = (arr: number[]) => {
    let result: any = {};
    let max = 0;
    let mostOccurrencesNumber = 0;

    arr = arr.slice(0); // make a copy of the array

    for (let i = 0; i < arr.length; ++i) {
      const val = arr[i];
      const counter = (result[val] || 0) + 1;

      result[val] = counter;

      if (counter > max) {
        max = counter;
        mostOccurrencesNumber = val;
      }
    }

    return mostOccurrencesNumber;
  }
}

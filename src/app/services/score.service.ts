import { Injectable } from '@angular/core';

import { ScoreTable } from "../models/score-table";

const DEFAULT_TABLE = {
  aces: 0,
  twos: 0,
  threes: 0,
  fours: 0,
  fives: 0,
  sixes: 0,
  threeKind: 0,
  fourKind: 0,
  fullHouse: 0,
  smallStraight: 0,
  largeStraight: 0
}

@Injectable({
  providedIn: 'root'
})
export class ScoreService {

  public addedPoints: string | undefined;

  public round: ScoreTable = { ...DEFAULT_TABLE };
  public total: ScoreTable = { ...DEFAULT_TABLE };

  constructor() { }

  calculateScores(dices: number[]): void {
    // Upper section
    this.round.aces = (
      dices[0] === 1 ||
      dices[1] === 1 ||
      dices[2] === 1 ||
      dices[3] === 1 ||
      dices[4] === 1
    ) ? 1 : 0;

    this.round.twos = (
      dices[0] === 2 ||
      dices[1] === 2 ||
      dices[2] === 2 ||
      dices[3] === 2 ||
      dices[4] === 2
    ) ? 2 : 0

    this.round.threes = (
      dices[0] === 3 ||
      dices[1] === 3 ||
      dices[2] === 3 ||
      dices[3] === 3 ||
      dices[4] === 3
    ) ? 3 : 0

    this.round.fours = (
      dices[0] === 4 ||
      dices[1] === 4 ||
      dices[2] === 4 ||
      dices[3] === 4 ||
      dices[4] === 4
    ) ? 4 : 0

    this.round.fives = (
      dices[0] === 5 ||
      dices[1] === 5 ||
      dices[2] === 5 ||
      dices[3] === 5 ||
      dices[4] === 5
    ) ? 5 : 0

    this.round.sixes = (
      dices[0] === 6 ||
      dices[1] === 6 ||
      dices[2] === 6 ||
      dices[3] === 6 ||
      dices[4] === 6
    ) ? 6 : 0

    // Lower section
    this.round.threeKind = (
      dices.filter(d => d === 1).length === 3 ||
      dices.filter(d => d === 2).length === 3 ||
      dices.filter(d => d === 3).length === 3 ||
      dices.filter(d => d === 4).length === 3 ||
      dices.filter(d => d === 5).length === 3 ||
      dices.filter(d => d === 6).length === 3
    ) ? (this.getDuplicate(dices) * 3) : 0;

    this.round.fourKind = (
      dices.filter(d => d === 1).length === 4 ||
      dices.filter(d => d === 2).length === 4 ||
      dices.filter(d => d === 3).length === 4 ||
      dices.filter(d => d === 4).length === 4 ||
      dices.filter(d => d === 5).length === 4 ||
      dices.filter(d => d === 6).length === 4
    ) ? (this.getDuplicate(dices) * 4) : 0;

    this.round.fullHouse = (
      dices.filter(d => d === 1).length === 5 ||
      dices.filter(d => d === 2).length === 5 ||
      dices.filter(d => d === 3).length === 5 ||
      dices.filter(d => d === 4).length === 5 ||
      dices.filter(d => d === 5).length === 5 ||
      dices.filter(d => d === 6).length === 5
    ) ? 25 : 0;

    this.round.smallStraight = (
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

    this.round.largeStraight = (
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
      this.total.aces += this.round.aces;
    } else if (key === 'twos') {
      this.total.twos += this.round.twos;
    } else if (key === 'threes') {
      this.total.threes += this.round.threes;
    } else if (key === 'fours') {
      this.total.fours += this.round.fours;
    } else if (key === 'fives') {
      this.total.fives += this.round.fives;
    } else if (key === 'sixes') {
      this.total.sixes += this.round.sixes;
    }

    // Lower section
    if (key === 'threeKind') {
      this.total.threeKind += this.round.threeKind;
    } else if (key === 'fourKind') {
      this.total.fourKind += this.round.fourKind;
    } else if (key === 'fullHouse') {
      this.total.fullHouse += this.round.fullHouse;
    } else if (key === 'smallStraight') {
      this.total.smallStraight += this.round.smallStraight;
    } else if (key === 'largeStraight') {
      this.total.largeStraight += this.round.largeStraight;
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

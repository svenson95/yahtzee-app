import { Injectable } from '@angular/core';

import { ScoreTable } from '../models/score-table';

@Injectable({
  providedIn: 'root',
})
export class ScoreService {
  public points: string;

  public round = new ScoreTable();
  public total = new ScoreTable();

  calculateScores(dices: number[]): void {
    // Upper section
    this.round.aces = dices.find((d) => d === 1) ? 1 : 0;
    this.round.twos = dices.find((d) => d === 2) ? 2 : 0;
    this.round.threes = dices.find((d) => d === 3) ? 3 : 0;
    this.round.fours = dices.find((d) => d === 4) ? 4 : 0;
    this.round.fives = dices.find((d) => d === 5) ? 5 : 0;
    this.round.sixes = dices.find((d) => d === 6) ? 6 : 0;

    // Lower section
    this.round.threeKind =
      dices.filter((d) => d === 1).length === 3 ||
      dices.filter((d) => d === 2).length === 3 ||
      dices.filter((d) => d === 3).length === 3 ||
      dices.filter((d) => d === 4).length === 3 ||
      dices.filter((d) => d === 5).length === 3 ||
      dices.filter((d) => d === 6).length === 3
        ? this.getDuplicate(dices) * 3
        : 0;

    this.round.fourKind =
      dices.filter((d) => d === 1).length === 4 ||
      dices.filter((d) => d === 2).length === 4 ||
      dices.filter((d) => d === 3).length === 4 ||
      dices.filter((d) => d === 4).length === 4 ||
      dices.filter((d) => d === 5).length === 4 ||
      dices.filter((d) => d === 6).length === 4
        ? this.getDuplicate(dices) * 4
        : 0;

    this.round.fullHouse =
      dices.filter((d) => d === 1).length === 5 ||
      dices.filter((d) => d === 2).length === 5 ||
      dices.filter((d) => d === 3).length === 5 ||
      dices.filter((d) => d === 4).length === 5 ||
      dices.filter((d) => d === 5).length === 5 ||
      dices.filter((d) => d === 6).length === 5
        ? 25
        : 0;

    this.round.smallStraight =
      (dices.find((d) => d === 1) &&
        dices.find((d) => d === 2) &&
        dices.find((d) => d === 3) &&
        dices.find((d) => d === 4)) ||
      (dices.find((d) => d === 2) &&
        dices.find((d) => d === 3) &&
        dices.find((d) => d === 4) &&
        dices.find((d) => d === 5)) ||
      (dices.find((d) => d === 3) &&
        dices.find((d) => d === 4) &&
        dices.find((d) => d === 5) &&
        dices.find((d) => d === 6))
        ? 30
        : 0;

    this.round.largeStraight =
      (dices.find((d) => d === 1) &&
        dices.find((d) => d === 2) &&
        dices.find((d) => d === 3) &&
        dices.find((d) => d === 4) &&
        dices.find((d) => d === 5)) ||
      (dices.find((d) => d === 2) &&
        dices.find((d) => d === 3) &&
        dices.find((d) => d === 4) &&
        dices.find((d) => d === 5) &&
        dices.find((d) => d === 6))
        ? 40
        : 0;
  }

  savePoints(key: string): void {
    if (this.points !== undefined) return;
    this.points = key;

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
    let counters = {};
    let occurrences = 0;
    let numberWithMostOccurrences = 0;

    arr.forEach((number) => {
      const counter = (counters[number] || 0) + 1;
      counters[number] = counter;

      if (counter > occurrences) {
        occurrences = counter;
        numberWithMostOccurrences = number;
      }
    });

    return numberWithMostOccurrences;
  };
}

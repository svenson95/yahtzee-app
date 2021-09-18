import { Component, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { DiceService } from "../../services/dice.service";

@Component({
  selector: 'ytz-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, OnChanges {

  @Input() dices!: number[];

  // Round score
  acesValue = 0;
  twosValue = 0;
  threesValue = 0;
  foursValue = 0;
  fivesValue = 0;
  sixesValue = 0;
  threeKindValue = 0;
  fourKindValue = 0;
  fullHouseValue = 0;
  smallStraightValue = 0;
  largeStraightValue = 0;

  // Total score
  acesScore = 0;
  twosScore = 0;
  threesScore = 0;
  foursScore = 0;
  fivesScore = 0;
  sixesScore = 0;
  threeKindScore = 0;
  fourKindScore = 0;
  fullHouseScore = 0;
  smallStraightScore = 0;
  largeStraightScore = 0;

  addedPoints = false;

  constructor(private elementRef: ElementRef,
              private dice: DiceService
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges) {
    // TODO: fix hook unnecessary called multiple times (5 times per roll)
    this.calculateScores();
    this.addedPoints = false;

    const buttons = this.elementRef.nativeElement.querySelectorAll('.save-score-btn');
    if (this.dice.gameStarted && buttons) {
      buttons.forEach((b: any) => b.classList.remove('selected'));
    }
  }

  calculateScores(): void {
    // Upper section
    this.acesValue = (
      this.dices[0] === 1 ||
      this.dices[1] === 1 ||
      this.dices[2] === 1 ||
      this.dices[3] === 1 ||
      this.dices[4] === 1
    ) ? 1 : 0;

    this.twosValue = (
      this.dices[0] === 2 ||
      this.dices[1] === 2 ||
      this.dices[2] === 2 ||
      this.dices[3] === 2 ||
      this.dices[4] === 2
    ) ? 2 : 0

    this.threesValue = (
      this.dices[0] === 3 ||
      this.dices[1] === 3 ||
      this.dices[2] === 3 ||
      this.dices[3] === 3 ||
      this.dices[4] === 3
    ) ? 3 : 0

    this.foursValue = (
      this.dices[0] === 4 ||
      this.dices[1] === 4 ||
      this.dices[2] === 4 ||
      this.dices[3] === 4 ||
      this.dices[4] === 4
    ) ? 4 : 0

    this.fivesValue = (
      this.dices[0] === 5 ||
      this.dices[1] === 5 ||
      this.dices[2] === 5 ||
      this.dices[3] === 5 ||
      this.dices[4] === 5
    ) ? 5 : 0

    this.sixesValue = (
      this.dices[0] === 6 ||
      this.dices[1] === 6 ||
      this.dices[2] === 6 ||
      this.dices[3] === 6 ||
      this.dices[4] === 6
    ) ? 6 : 0

    // Lower section
    this.threeKindValue = (
      this.dices.filter(d => d === 1).length === 3 ||
      this.dices.filter(d => d === 2).length === 3 ||
      this.dices.filter(d => d === 3).length === 3 ||
      this.dices.filter(d => d === 4).length === 3 ||
      this.dices.filter(d => d === 5).length === 3 ||
      this.dices.filter(d => d === 6).length === 3
    ) ? (this.findDuplicates(this.dices)[0] * 3) : 0;

    this.fourKindValue = (
      this.dices.filter(d => d === 1).length === 4 ||
      this.dices.filter(d => d === 2).length === 4 ||
      this.dices.filter(d => d === 3).length === 4 ||
      this.dices.filter(d => d === 4).length === 4 ||
      this.dices.filter(d => d === 5).length === 4 ||
      this.dices.filter(d => d === 6).length === 4
    ) ? (this.findDuplicates(this.dices)[0] * 4) : 0;

    this.fullHouseValue = (
      this.dices.filter(d => d === 1).length === 5 ||
      this.dices.filter(d => d === 2).length === 5 ||
      this.dices.filter(d => d === 3).length === 5 ||
      this.dices.filter(d => d === 4).length === 5 ||
      this.dices.filter(d => d === 5).length === 5 ||
      this.dices.filter(d => d === 6).length === 5
    ) ? 25 : 0;

    this.smallStraightValue = (
      (
        this.dices.find(d => d === 1) &&
        this.dices.find(d => d === 2) &&
        this.dices.find(d => d === 3) &&
        this.dices.find(d => d === 4)
      ) ||
      (
        this.dices.find(d => d === 2) &&
        this.dices.find(d => d === 3) &&
        this.dices.find(d => d === 4) &&
        this.dices.find(d => d === 5)
      ) ||
      (
        this.dices.find(d => d === 3) &&
        this.dices.find(d => d === 4) &&
        this.dices.find(d => d === 5) &&
        this.dices.find(d => d === 6)
      )
    ) ? 30 : 0;

    this.largeStraightValue = (
      (
        this.dices.find(d => d === 1) &&
        this.dices.find(d => d === 2) &&
        this.dices.find(d => d === 3) &&
        this.dices.find(d => d === 4) &&
        this.dices.find(d => d === 5)
      ) ||
      (
        this.dices.find(d => d === 2) &&
        this.dices.find(d => d === 3) &&
        this.dices.find(d => d === 4) &&
        this.dices.find(d => d === 5) &&
        this.dices.find(d => d === 6)
      )
    ) ? 40 : 0;
  }

  findDuplicates = (arr: number[]) => {
    let sorted_arr = arr.slice().sort();
    let results = [];

    // TODO: fix function since it sometimes fails if theres a double pair and a threekind pair (e.g. [1,1,2,2,2]
    for (let i = 0; i < sorted_arr.length - 1; i++) {
      if (sorted_arr[i + 1] == sorted_arr[i]) {
        results.push(sorted_arr[i]);
      }
    }
    return results;
  }

  saveScore(key: string, button: any): void {
    if (this.addedPoints) return;
    this.addedPoints = true;
    button.target.classList.add('selected');

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
}

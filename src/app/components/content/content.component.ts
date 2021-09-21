import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DiceService } from "../../services/dice.service";
import { RoundService } from "../../services/round.service";

@Component({
  selector: 'ytz-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('diceContainer') diceContainer: ElementRef;

  constructor(public dice: DiceService, public round: RoundService) {}

  ngOnInit(): void {
  }

  get diceValues() {
    return [...this.dice.values];
  }

  onPlay() {
    this.dice.gameStarted = true;
    this.round.nextTry();
    this.dice.rollDices(this.diceContainer.nativeElement);
  }

  onRoll() {
    this.round.nextTry();
    this.dice.rollDices(this.diceContainer.nativeElement);
  }
}

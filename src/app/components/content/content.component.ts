import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DiceService } from "../../services/dice.service";

@Component({
  selector: 'ytz-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  @ViewChild('diceContainer') diceContainer: ElementRef;

  constructor(public dice: DiceService) { }

  ngOnInit(): void {
  }

  get diceValues() {
    return [...this.dice.values];
  }

  startGame() {
    this.dice.gameStarted = true;
    this.dice.rollDices(this.diceContainer.nativeElement);
  }
}

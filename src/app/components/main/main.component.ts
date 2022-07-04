import { Component, ElementRef, Inject, OnInit, ViewChild } from '@angular/core';

import { DiceService } from '../../services/dice.service';
import { RoundService } from '../../services/round.service';

@Component({
  selector: 'main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  @ViewChild('diceContainer') diceContainer: ElementRef;

  constructor(@Inject(DiceService) private dice: DiceService, @Inject(RoundService) private round: RoundService) {}

  get diceValues() {
    return [...this.dice.values];
  }

  get gameStarted() {
    return this.dice.gameStarted;
  }

  get tryCounter() {
    return this.round.tryCounter;
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

import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { GameService } from './services/dice.service';

@Component({
  selector: 'ytz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('diceContainer') diceContainer: ElementRef;

  constructor(@Inject(GameService) private dice: GameService) {}

  get diceValues() {
    return [...this.dice.values];
  }

  get gameStarted() {
    return this.dice.isStarted;
  }

  get tryCounter() {
    return this.dice.tryCounter;
  }

  onPlay() {
    this.dice.isStarted = true;
    this.dice.nextTry();
    this.dice.rollDices(this.diceContainer.nativeElement);
  }

  onRoll() {
    this.dice.nextTry();
    this.dice.rollDices(this.diceContainer.nativeElement);
  }
}

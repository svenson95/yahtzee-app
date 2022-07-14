import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { DicesComponent } from './components/dices/dices.component';
import { GameService } from './services/game.service';

@Component({
  selector: 'ytz-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(DicesComponent, { read: ElementRef }) diceContainer: ElementRef;

  constructor(@Inject(GameService) private game: GameService) {}

  get gameStarted() {
    return this.game.isStarted;
  }

  get tryCounter() {
    return this.game.tryCounter;
  }

  get diceValues() {
    return [...this.game.values];
  }

  onPlay() {
    this.game.isStarted = true;
    this.game.nextTry();
    this.game.roll(this.diceContainer.nativeElement);
  }

  onRoll() {
    this.game.nextTry();
    this.game.roll(this.diceContainer.nativeElement);
  }
}

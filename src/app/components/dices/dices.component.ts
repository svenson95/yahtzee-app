import { Component, Inject } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'ytz-dices',
  templateUrl: './dices.component.html',
  styleUrls: ['./dices.component.scss'],
})
export class DicesComponent {
  get diceValues() {
    return [...this.game.values];
  }

  get gameStarted() {
    return this.game.isStarted;
  }

  constructor(@Inject(GameService) private game: GameService) {}
}

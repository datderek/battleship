import Player from './Player.js'
import Bot from './Bot.js';

export default class GameController {
  constructor() {
    this.playerOne = new Player("User");
    this.playerTwo = new Bot();
    this.currentPlayer = this.playerOne;
    this.opponent = this.playerTwo;
  }

  start() {
    this.getMove();
  }

  getMove() {
    this.currentPlayer.selectMove()
      .then((move) => this.playTurn(move));
  }

  playTurn(move) {
  }
}
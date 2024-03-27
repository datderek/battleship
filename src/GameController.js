import Player from './Player.js'
import Bot from './Bot.js';

export default class GameController {
  constructor() {
    this.playerOne = new Player("User");
    this.playerTwo = new Bot();
    this.currentPlayer = this.playerOne;
    this.opponent = this.playerTwo;
    this.winner = null;
  }

  start() {
    this.#getNextMove();
  }

  #getNextMove() {
    this.currentPlayer.selectMove()
      .then((move) => this.playTurn(move[0], move[1]));
  }

  #isValidMove(row, col) {
    if (isNaN(row) || isNaN(col) || row < 0 || row > 9 || col < 0 || col > 9) {
      return false;
    }
    
    return true;
  }

  #isGameOver() {
    return this.opponent.board.isAllSunk();
  }

  #setWinner() {
    this.winner = this.currentPlayer;
  }

  #switchPlayer() {
    const temp = this.currentPlayer;
    this.currentPlayer = this.opponent;
    this.opponent = temp;
  }

  playTurn(row, col) {
    if (!this.#isValidMove(row, col)) return 'Invalid move. Please choose another tile.';

    const result = this.opponent.board.receiveAttack(row, col)
    if (result !== 'success') {
      return `${result} Please choose another tile.`;
    }
    
    if (this.#isGameOver()) this.#setWinner();

    this.#switchPlayer();
    //this.#getNextMove();
  }
}
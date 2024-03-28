import Player from './Player.js'
import Bot from './Bot.js';
import Display from './Display.js';

export default class GameController {
  constructor() {
    this.playerOne = new Player("User");
    this.playerTwo = new Bot();
    this.currentPlayer = this.playerOne;
    this.opponent = this.playerTwo;
    this.winner = null;
  }

  start() {
    Display.renderGrid();
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
    if (!this.#isValidMove(row, col)) {
      this.#getNextMove();
      return 'Invalid move. Please choose another tile.';
    }

    const result = this.opponent.board.receiveAttack(row, col)
    if (result !== 'success') {
      this.#getNextMove();
      return `${result} Please choose another tile.`;
    }

    Display.updateTile(this.playerOne.board.grid[row][col], this.playerTwo.board.grid[row][col], row, col);
    if (this.#isGameOver()) this.#setWinner();

    this.#switchPlayer();
    this.#getNextMove();
  }
}
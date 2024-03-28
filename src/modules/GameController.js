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
    this.gameState = null;
  }

  /**
   * Starts the game
   */
  start() {
    this.playerOne.placeRandom();
    this.playerTwo.placeRandom();
    this.gameState = 'active';
    Display.renderGrid();
    Display.renderShips(this.playerOne.board.grid);
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

  #endGame() {
    this.#setWinner();
    Display.renderMessage(`Game over. ${this.winner.name} has prevailed!`);
  }

  #switchPlayer() {
    const temp = this.currentPlayer;
    this.currentPlayer = this.opponent;
    this.opponent = temp;
  }

  /**
   * Plays the turn with the provided move (row, col)
   * 
   * @param {number} row of selected tile
   * @param {number} col of selected tile
   * @returns {string|null} returns a string containing the error message if the 
   *                        move was invalid, otherwise advances to the next turn
   */
  playTurn(row, col) {
    if (!this.#isValidMove(row, col)) {
      Display.renderMessage('Invalid move. Please choose another tile.');
      this.#getNextMove();
      return;
    }

    const result = this.opponent.board.receiveAttack(row, col)
    
    if (result.success) {
      // TODO: PlayerVBot this updates your view of the enemies board on your turn
      //       but updates your own board with their hit on their turn
      // TODO: PlayerVPlayer this updates ONLY updates your own view of your enemies board, then switches to their display
      Display.updateTile(this.playerOne.board.grid[row][col], this.playerTwo.board.grid[row][col], row, col);
      
      if (result.message === 'Miss!') {
        this.#switchPlayer();
      } else { 
        if (this.#isGameOver()) {
          this.#endGame();
        }
      }
    } else {
      Display.renderMessage(`${result.message} Please choose another tile.`);
    }

    this.#getNextMove();
  }
}
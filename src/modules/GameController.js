import Player from './Player.js'
import Bot from './Bot.js';
import Display from './Display.js';
import Utils from './Utils.js';

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
  async start() {
    this.gameState = 'active';
    Display.renderGrid();
    await this.playerTwo.placeFleet();
    Display.hideShips();
    await this.playerOne.placeFleet();
    this.#getNextMove();
  }

  #getNextMove() {
    Display.renderMessage('Choose a tile to attack!');
    this.currentPlayer.selectTileTo('attack')
      .then((response) => this.playTurn(response.row, response.col));
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
  async playTurn(row, col) {
    const result = this.opponent.board.receiveAttack(row, col);
    if (this.currentPlayer.name === 'Bot') this.currentPlayer.receiveFeedback(row, col, result);

    if (result.success) {
      Display.updateTile(this.playerOne.board.grid[row][col], this.playerTwo.board.grid[row][col], row, col);
      Display.renderMessage(`${this.currentPlayer.name} fired a shot at ${Utils.formatCoordinates(row, col)}, it was a... ${result.message}`);
      
      if (result.message === 'Miss!') {
        this.#switchPlayer();
      } else { 
        if (this.#isGameOver()) {
          this.#endGame();
          return;
        }
      }
    } else {
      Display.renderMessage(`${result.message} Please choose another tile.`);
    }

    await Utils.delay((this.currentPlayer.name === 'Bot' ? 250 : 1500));
    this.#getNextMove();
  }
}
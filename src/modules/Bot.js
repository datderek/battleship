import Player from "./Player.js";

export default class Bot extends Player {
  constructor() {
    super("Bot");
    this.mode = 'searching';
    this.targetQueue = [];
  }

  #generateRandomDirection() {
    return (Math.round(Math.random()) === 0 ? 'horizontal' : 'vertical');
  }

  #generateRandomCoordinates() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y]
  }

  #generateCoordinates() {
    if (this.mode === 'searching') {
      return this.#generateRandomCoordinates();
    } else if (this.mode ==='found') {
      return this.targetQueue.pop();
    }
  }

  #addAdjacentTiles(row, col) {
    this.targetQueue.push([row + 1, col], [row, col + 1], [row - 1, col], [row, col - 1]);
  }

  /**
   * Determines which mode we are in and what tiles the Bot should target
   * @param {} row 
   * @param {*} col 
   * @param {*} result 
   */
  receiveFeedback(row, col, result) {
    if (result.message === 'Hit!' && this.mode === 'searching') {
      this.#addAdjacentTiles(row, col);
      this.mode = 'found';
    } else if (this.mode === 'found') {
      if (result.message === 'Hit!') {
        this.#addAdjacentTiles(row, col);
      }

      // If there are no tiles to target, switch back to searching mode
      if (this.targetQueue.length === 0) {
        this.mode = 'searching';
      }
    }
  }
  
  /**
   * Selects a tile
   * 
   * @returns a Promise that resolves to the selected tile
   */
  selectTileTo(action) {
    return new Promise((resolve) => {
      const response = {
        row: null,
        col: null,
      }

      let row, col;

      if (action === 'place') {
        response.direction = this.#generateRandomDirection();
        ([row, col] = this.#generateRandomCoordinates());
      } else if (action === 'attack') {
        ([row, col] = this.#generateCoordinates());
      }

      response.row = row;
      response.col = col;
      resolve(response);
    })
  }
}
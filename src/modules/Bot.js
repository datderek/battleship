import Player from "./Player.js";

export default class Bot extends Player {
  constructor() {
    super("Bot");
    this.mode = 'searching';
    this.attackQueue = [];
    this.shipEndpoints = [];
    this.shipOrientation = null;
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
    } else if (this.mode === 'found' || this.mode === 'target') {
      return this.attackQueue.pop();
    }
  }

  #addAdjacentTiles(row, col) {
    this.attackQueue.push([row + 1, col], [row, col + 1], [row - 1, col], [row, col - 1]);
  }

  /**
   * Determines which mode we are in and what tiles the Bot should target
   * @param {} row 
   * @param {*} col 
   * @param {*} result 
   */
  receiveFeedback(row, col, result) {
    if (this.mode === 'searching' && result.message === 'Hit!') {
      this.#addAdjacentTiles(row, col);
      this.mode = 'found';
      this.shipEndpoints.push([row, col]);
    } else if (this.mode === 'found' && result.message === 'Hit!') {
      this.attackQueue = [];
      this.mode = 'target';
      const prevRow = this.shipEndpoints[0][0];
      const prevCol = this.shipEndpoints[0][1];

      if (row != prevRow) {
        this.shipOrientation = 'vertical';

        if (row > prevRow) {
          this.shipEndpoints.push([row, col]);
        } else {
          this.shipEndpoints.unshift([row, col]);
        }

        const startRow = this.shipEndpoints[0][0];
        const endRow = this.shipEndpoints[1][0];
        this.attackQueue.push([startRow - 1, col], [endRow + 1, col]);
      } else {
        this.shipOrientation = 'horizontal';

        if (col > prevCol) {
          this.shipEndpoints.push([row, col]);
        } else {
          this.shipEndpoints.unshift([row, col]);
        }

        const startCol = this.shipEndpoints[0][1];
        const endCol = this.shipEndpoints[1][1];
        this.attackQueue.push([row, startCol - 1], [row, endCol + 1]);
      }
    } else if (this.mode === 'target') {
      if (result.message === 'Hit!') {
        if (this.shipOrientation === 'vertical') {
          const startRow = this.shipEndpoints[0][0];

          // Updates the endpoints
          if (row > startRow) { // down
            this.shipEndpoints[1] = [row, col];
            this.attackQueue.push([row + 1, col]);
          } else { // up
            this.shipEndpoints[0] = [row, col];
            this.attackQueue.push([row - 1 , col]);
          }
        } else {
          const endCol = this.shipEndpoints[1][1];

          if (col > endCol) { // right
            this.shipEndpoints[1] = [row, col];
            this.attackQueue.push([row, col + 1]);
          } else { // left
            this.shipEndpoints[0] = [row, col];
            this.attackQueue.push([row, col - 1]);
          }
        }
      }

      if (this.attackQueue.length === 0) {
        this.mode = 'searching'
        this.shipEndpoints = [];
        this.shipOrientation = null;
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
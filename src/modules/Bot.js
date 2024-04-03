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

  #setShipOrientation(row) {
    if (row != this.shipEndpoints[0][0]) {
      this.shipOrientation = 'vertical';
    } else {
      this.shipOrientation = 'horizontal';
    }
  }

  #updateShipEndpoints(row, col) {
    // Initial discovery of ship
    if (this.shipEndpoints.length === 0) {
      this.shipEndpoints.push([row, col], [row, col]);
    }

    // Subsequent endpoint updates
    if (this.shipOrientation === 'vertical') {
      const startRow = this.shipEndpoints[0][0];
      
      if (row < startRow) {
        this.shipEndpoints[0] = [row, col];
      } else {
        this.shipEndpoints[1] = [row, col];
      }
    } else {
      const startCol = this.shipEndpoints[0][1];

      if (col < startCol) {
        this.shipEndpoints[0] = [row, col];
      } else {
        this.shipEndpoints[1] = [row, col];
      }
    }
  }

  #targetNextEndpoint(row, col) {
    if (this.shipOrientation === 'vertical') {
      const startRow = this.shipEndpoints[0][0];

      if (row === startRow) {
        this.attackQueue.push([row - 1, col]);
      } else {
        this.attackQueue.push([row + 1 , col]);
      }
    } else {
      const startCol = this.shipEndpoints[0][1];

      if (col === startCol) { 
        this.attackQueue.push([row, col - 1]);
      } else { 
        this.attackQueue.push([row, col + 1]);
      }
    }
  }

  #targetEndpoints(row, col) {
    if (this.shipOrientation === 'vertical') {
      const startRow = this.shipEndpoints[0][0];
      const endRow = this.shipEndpoints[1][0];
      this.attackQueue.push([startRow - 1, col], [endRow + 1, col]);
    } else {
      const startCol = this.shipEndpoints[0][1];
      const endCol = this.shipEndpoints[1][1];
      this.attackQueue.push([row, startCol - 1], [row, endCol + 1]);
    }
  }

  /**
   * Determines which mode we are in and what tiles the Bot should target next
   * 
   * @param {} row 
   * @param {*} col 
   * @param {*} result 
   */
  receiveFeedback(row, col, result) {
    if (this.mode === 'searching' && result.message === 'Hit!') {
      this.mode = 'found';
      this.attackQueue.push([row + 1, col], [row, col + 1], [row - 1, col], [row, col - 1]);
      this.#updateShipEndpoints(row, col);
    } else if (this.mode === 'found' && result.message === 'Hit!') {
      this.mode = 'target';
      this.attackQueue = [];
      this.#setShipOrientation(row);
      this.#updateShipEndpoints(row, col);
      this.#targetEndpoints(row, col)
    } else if (this.mode === 'target') {
      if (result.message === 'Hit!') {
        this.#updateShipEndpoints(row, col);
        this.#targetNextEndpoint(row, col);
      }
    }

    if (this.attackQueue.length === 0) {
      this.mode = 'searching'
      this.shipEndpoints = [];
      this.shipOrientation = null;
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
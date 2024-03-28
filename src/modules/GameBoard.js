import Ship from "./Ship.js";

export default class GameBoard {
  constructor() {
    this.grid = Array.from(Array(10), () => {
      return new Array(10).fill().map(() => ({
        hasShip: null,
        isShot: false
      }))
    });

    this.fleet = {
      carrier: new Ship(5),
      battleship: new Ship(4),
      destroyer: new Ship(3),
      submarine: new Ship(3),
      patrol: new Ship(2),
    };
  }
  
  /**
   * Retrieves the ship
   * 
   * @param {string} shipName of the ship to retrieve
   * @returns {Ship} the Ship reference
   */
  getShip(shipName) {
    return this.fleet[shipName];
  }

  #isInBounds(row, col) {
    if (row < 0 || row > 9 || col < 0 || col > 9) {
      return false;
    }
    
    return true;
  }

  #isValidLocation(row, col, ship, direction) {
    if (direction === 'vertical' && row + ship.length - 1 > 9
        || direction === 'horizontal' && col + ship.length - 1 > 9) {
      return false;              
    }

    return true;
  }

  #isShipNearby(row, col) {
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (!this.#isInBounds(row + i, col + j)) continue;
        if (this.grid[row + i][col + j].hasShip) return true;
      }
    }

    return false;
  }

  #isUnobstructed(row, col, ship, direction) {
    for (let i = 0; i < ship.length; i++) {
      if (direction === 'vertical') {
        if (this.#isShipNearby(row + i, col)) {
          return false;
        }
      } else {
        if (this.#isShipNearby(row, col + i)) {
          return false;
        }
      }
    }
    
    return true;
  }

  /**
   * Places the start of the ship at the provided tile (row, col).
   * 
   * @param {number} row of the tile to place the start of the ship
   * @param {number} col of the tile to place the start of the ship
   * @param {string} shipName of the ship to place
   * @param {string} direction 'vertical' or 'horizontal'
   * @returns {string} message indicating success or error
   */
  place(row, col, shipName, direction) {
    const ship = this.getShip(shipName);

    if (!this.#isInBounds(row, col)) return 'Coordinates are out of bound.';
    if (!this.#isValidLocation(row, col, ship, direction)) return 'Ship does not fit at that location.';
    if (!this.#isUnobstructed(row, col, ship, direction)) return 'There is already a ship at that location.';

    for (let i = 0; i < ship.length; i++) {
      if (direction === 'vertical') {
        this.grid[row + i][col].hasShip = ship;
      } else {
        this.grid[row][col + i].hasShip = ship;
      }
    }

    return 'success';
  }

  /**
   * Receives the attack on the board
   * 
   * @param {number} row of the attacked tile
   * @param {number} col of the attacked tile
   * @returns {string} message indicating success or error
   */
  receiveAttack(row, col) {
    if (!this.#isInBounds(row, col)) return 'Coordinates are out of bound.';
    if (this.grid[row][col].isShot) return 'You have already shot this tile.';

    this.grid[row][col].isShot = true;
    if (this.grid[row][col].hasShip) this.grid[row][col].hasShip.hit();

    return 'success';
  }

  /**
   * Checks if all ships on the board are sunk
   * 
   * @returns {boolean} true if all ships are sunk, else false
   */
  isAllSunk() {
    return Object.values(this.fleet).every((ship) => ship.isSunk());
  }
}
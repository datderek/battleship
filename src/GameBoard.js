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

  #isUnobstructed(row, col, ship, direction) {
    for (let i = 0; i < ship.length; i++) {
      if (direction === 'vertical') {
        if (this.grid[row + i][col].hasShip) {
          return false;
        }
      } else {
        if (this.grid[row][col + i].hasShip) {
          return false;
        }
      }
    }
    
    return true;
  }

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
  }

  receiveAttack(row, col) {
    if (!this.#isInBounds(row, col)) return 'Coordinates are out of bound.';
    if (this.grid[row][col].isShot) return 'You have already shot this tile.';

    this.grid[row][col].isShot = true;
    if (this.grid[row][col].hasShip) this.grid[row][col].hasShip.hit();
  }
}
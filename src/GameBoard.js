import Ship from "./Ship.js";

export default class GameBoard {
  constructor() {
    this.grid = Array.from(Array(10), () => {
      return new Array(10).fill({
        hasShip: null,
        isShot: false
      })
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

  place(row, col, shipName) {
    const ship = this.getShip(shipName);

    if (row < 0 || row > 9 || col < 0 || col > 9) {
      return 'Coordinates are out of bound.';
    } else if (row + ship.length > 9 || col + ship.length > 9) {
      return 'Ship does not fit at that location.';
    }

    for (let i = 0; i < ship.length; i++) {
      if (this.grid[row + i][col].hasShip) {
        return 'There is already a ship at that location.';
      }
    }

    for (let i = 0; i < ship.length; i++) {
      this.grid[row + i][col].hasShip = ship;
    }
  }

  receiveAttack(row, col) {
    if (row < 0 || row > 9 || col < 0 || col > 9) {
      return 'Coordinates are out of bound.';
    }

    if (this.grid[row][col].isShot) {
      return 'You have already shot this tile.';
    }

    this.grid[row][col].isShot = true;
    if (this.grid[row][col].hasShip) this.grid[row][col].hasShip.hit();
  }
}
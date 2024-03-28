export default class Ship {
  constructor(length) {
    if (length === undefined || length < 0 || length > 5) {
      throw new Error("Please provide a ship length between greater than 0 and less than 6.")
    }
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }

  /**
   * Hits the ship
   * 
   * @returns {null} if the ship is already sunken
   */
  hit() {
    if (this.isSunk()) {
      return;
    }
    
    this.hitCount += 1;
  }

  /**
   * Checks if the ship is sunk
   * 
   * @returns {boolean} true if the ship is sunk, else false
   */
  isSunk() {
    return this.hitCount === this.length;
  }
}
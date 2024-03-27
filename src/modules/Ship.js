class Ship {
  constructor(length) {
    if (length === undefined || length < 0 || length > 5) {
      throw new Error("Please provide a ship length between greater than 0 and less than 6.")
    }
    this.length = length;
    this.hitCount = 0;
    this.sunk = false;
  }

  hit() {
    if (this.hitCount === this.length) {
      return;
    }
    
    this.hitCount += 1;
  }

  isSunk() {
    return this.hitCount === this.length;
  }
}

export default Ship;
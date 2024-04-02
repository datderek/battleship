export default class Utils {
  /**
   * Checks whether the tile is a valid tile (in bounds)
   * 
   * @param {number} row 
   * @param {number} col 
   * @returns true if valid, false if not
   */
  static isValidTile(row, col) {
    if (isNaN(row) || isNaN(col) || row < 0 || row > 9 || col < 0 || col > 9) {
      return false;
    }
    
    return true;
  }

  /**
   * Checks whether the tile is a valid location for a ship
   * 
   * @param {*} row 
   * @param {*} col 
   * @param {*} ship 
   * @param {*} direction 
   * @returns true if valid, false if not
   */
  static isValidLocation(row, col, ship, direction) {
    if (direction === 'vertical' && row + ship.length - 1 > 9
        || direction === 'horizontal' && col + ship.length - 1 > 9) {
      return false;              
    }

    return true;
  }

  /**
   * Formats the coordinates into Battleship format
   * 
   * @param {*} row 
   * @param {*} col 
   * @returns coordinates in Battleship format
   */
  static formatCoordinates(row, col) {
    return `${String.fromCharCode(row + 65)}${col + 1}`;
  }
}
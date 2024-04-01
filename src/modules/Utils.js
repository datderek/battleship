export default class Utils {
  static isValidTile(row, col) {
    if (isNaN(row) || isNaN(col) || row < 0 || row > 9 || col < 0 || col > 9) {
      return false;
    }
    
    return true;
  }

  static isValidLocation(row, col, ship, direction) {
    if (direction === 'vertical' && row + ship.length - 1 > 9
        || direction === 'horizontal' && col + ship.length - 1 > 9) {
      return false;              
    }

    return true;
  }

  static formatCoordinates(row, col) {
    return `${String.fromCharCode(row + 65)}${col + 1}`;
  }
}
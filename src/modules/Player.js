import GameBoard from "./GameBoard.js";

export default class Player {
  constructor(name) {
    this.name = name;
    this.board = new GameBoard();
  }
  
  /**
   * Selects a tile to attack
   * 
   * @returns a Promise that resolves to the selected tile
   */
  selectMove() {
    return new Promise((resolve) => {
      document.getElementById('opponents-grid').addEventListener('click', (e) => {
        resolve([Number(e.target.dataset.row), Number(e.target.dataset.col)]);
      }, { once: true })
    })
  }

  /**
   * Randomly places ships on the board
   */
  placeRandom() {
    Object.keys(this.board.fleet).forEach((shipName) => {
      let result;
      do {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        const direction = (Math.round(Math.random()) === 0 ? 'vertical' : 'horizontal');
        result = this.board.place(row, col, shipName, direction);
      } while (!result.success)
    })
  }

}
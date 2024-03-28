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

}
import GameBoard from "./GameBoard.js";

export default class Player {
  constructor(name) {
    this.name = name;
    this.board = new GameBoard();
  }

  selectMove() {
    return new Promise((resolve) => {
      document.getElementById('users-grid').addEventListener('click', (e) => {
        resolve([Number(e.target.dataset.row), Number(e.target.dataset.col)]);
      }, { once: true })
    })
  }
}
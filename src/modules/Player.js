import GameBoard from "./GameBoard.js";

export default class Player {
  constructor(name) {
    this.name = name;
    this.board = new GameBoard();
  }
  
  /**
   * Selects a tile
   * 
   * @returns a Promise that resolves to the selected tile
   */
  selectTileTo(action) {
    const grid = (action === 'place' ? 'users-grid' : 'opponents-grid');
    return new Promise((resolve) => {
      const response = {
        row: null,
        col: null,
      }

      if (action === 'place') {
        response.direction = 'horizontal';
        document.addEventListener('keydown', (e) => {
          if (e.key === 'r' || e.key === 'R') {
            response.direction = (response.direction === 'horizontal' ? 'vertical' : 'horizontal');
          }
        })
      }

      document.getElementById(grid).addEventListener('click', (e) => {
        response.row = Number(e.target.dataset.row);
        response.col = Number(e.target.dataset.col);
        resolve(response);
      }, { once: true });
    })
  }

  async placeFleet() {
    for (const shipName of Object.keys(this.board.fleet)) {
      let result;
      do {
        const response = await this.selectTileTo('place');
        const { row, col, direction } = response;
        console.log(row, col, direction);
        result = this.board.place(row, col, shipName, direction);
      } while (!result.success)
    }
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
import GameBoard from "./GameBoard.js";
import Display from "./Display.js";

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
            Display.currentDirection = response.direction;
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

  /**
   * Prompts the player to place their ships
   */
  async placeFleet() {
    for (const shipName of Object.keys(this.board.fleet)) {
      let result;
      Display.enableHighlight(this.board.getShip(shipName), 'horizontal');

      do {
        const response = await this.selectTileTo('place');
        const { row, col, direction } = response;
        result = this.board.place(row, col, shipName, direction);
      } while (!result.success)

      Display.renderMessage(result.message);
      Display.renderShips(this.board.grid);
    }
    
    Display.disableHighlight(); 
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
import GameBoard from "./GameBoard.js";
import Display from "./Display.js";
import Utils from "./Utils.js";

export default class Player {
  static ships = ['carrier', 'battleship', 'destroyer', 'submarine', 'patrol'];

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
    for (const ship of Player.ships) {
      let result;
      Display.enableHighlight(this.board.getShip(ship), 'horizontal');

      do {
        Display.renderMessage(`Please choose a location for your ${Utils.capitalize(ship)}`);
        const response = await this.selectTileTo('place');
        const { row, col, direction } = response;
        result = this.board.place(row, col, ship, direction);
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
    for (const ship of Player.ships) {
      let result;
      do {
        const row = Math.floor(Math.random() * 10);
        const col = Math.floor(Math.random() * 10);
        const direction = (Math.round(Math.random()) === 0 ? 'vertical' : 'horizontal');
        result = this.board.place(row, col, ship, direction);
      } while (!result.success)
    }
  }
}
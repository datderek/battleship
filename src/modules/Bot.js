import Player from "./Player.js";

export default class Bot extends Player {
  constructor() {
    super("Bot");
  }

  #generateRandomCoordinates() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y]
  }

  #generateRandomDirection() {
    return (Math.round(Math.random()) === 0 ? 'horizontal' : 'vertical');
  }

  /**
   * Selects a tile
   * 
   * @returns a Promise that resolves to the selected tile
   */
  selectTileTo(action) {
    return new Promise((resolve) => {
      const response = {
        row: null,
        col: null,
      }

      if (action === 'place') {
        response.direction = this.#generateRandomDirection();
      }

      const [row, col] = this.#generateRandomCoordinates();
      response.row = row;
      response.col = col;
      resolve(response);
    })
  }
}
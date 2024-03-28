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

  /**
   * Selects a tile to attack
   * 
   * @returns a Promise that resolves to the selected tile
   */
  selectMove() {
    return new Promise((resolve) => {
      resolve(this.#generateRandomCoordinates());
    })
  }
}
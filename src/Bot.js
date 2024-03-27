import Player from "./Player.js";

export default class Bot extends Player {
  constructor() {
    super("Bot");
  }

  generateRandomCoordinates() {
    const x = Math.floor(Math.random() * 10);
    const y = Math.floor(Math.random() * 10);
    return [x, y]
  }

  selectMove() {
    return new Promise((resolve) => {
      resolve(this.generateRandomCoordinates());
    })
  }
}
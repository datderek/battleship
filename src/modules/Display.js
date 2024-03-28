export default class Display {
  static usersGrid = document.querySelector('#users-grid');
  static opponentsGrid = document.querySelector('#opponents-grid');

  /**
   * Renders two 10x10 grids for the game
   */
  static renderGrid() {
    [this.usersGrid, this.opponentsGrid].forEach((grid) => {
      for (let i = 0; i < 10; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement('div');
          div.classList.add('tile');
          div.dataset.row = i;
          div.dataset.col = j;
          grid.appendChild(div);
        }
      }
    });
  }

  /**
   * Updates the visual state of the tile depending on whether the shot was a hit
   * or a miss
   */
  static updateTile(yourTileState, opponentTileState, row, col) {
    const myTile = this.usersGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (yourTileState.isShot) {
      if (yourTileState.hasShip) {
        myTile.classList.add('hit');
      } else {
        myTile.classList.add('miss');
      }
    }

    const opponentTile = this.opponentsGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
    if (opponentTileState.isShot) {
      if (opponentTileState.hasShip) {
        opponentTile.classList.add('hit');
      } else {
        opponentTile.classList.add('miss');
      }
    }
  }
}
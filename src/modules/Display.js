export default class Display {
  static usersGrid = document.querySelector('#users-grid');
  static opponentsGrid = document.querySelector('#opponents-grid');

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
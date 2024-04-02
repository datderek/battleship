import Utils from './Utils.js';

export default class Display {
  static usersGrid = document.querySelector('#users-grid');
  static opponentsGrid = document.querySelector('#opponents-grid');
  static roundMessage = document.querySelector('#round-message');
  static currentShip = null;
  static currentDirection = 'horizontal';

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
   * Reveals all ships on the board
   * 
   * @param {GameBoard} board 
   */
  static renderShips(board) {
    for (let row = 0; row <= 9; row++) {
      for (let col = 0; col <= 9; col++) {
        if (board[row][col].hasShip) {
          const tile = this.usersGrid.querySelector(`[data-row="${row}"][data-col="${col}"]`);
          tile.classList.add('ship');
        }
      }
    }
  }

  /**
   * Hides all ships on the board
   */
  static hideShips() {
    const tiles = this.usersGrid.querySelectorAll('.ship');
    tiles.forEach(tile => tile.classList.remove('ship'));
  }

  /**
   * Displays the round message
   * 
   * @param {string} msg 
   */
  static renderMessage(msg) {
    this.roundMessage.textContent = msg;
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

  static #addHighlight(e) {
    const row = Number(e.target.dataset.row);
    const col = Number(e.target.dataset.col);
    
    if (Utils.isValidTile(row, col) && Utils.isValidLocation(row, col, Display.currentShip, Display.currentDirection)) {
      for (let i = 0; i < Display.currentShip.length; i++) {
        let tile;
        if (Display.currentDirection === 'vertical') {
          tile = Display.usersGrid.querySelector(`[data-row="${row + i}"][data-col="${col}"]`);
        } else {
          tile = Display.usersGrid.querySelector(`[data-row="${row}"][data-col="${col + i}"]`);
        }
  
        tile.classList.add('highlight');
      }
    }
  }

  static #removeHighlight() {
    const highlightedTiles = Display.usersGrid.querySelectorAll('.highlight');
    highlightedTiles.forEach(tile => tile.classList.remove('highlight'));
  }

  /**
   * Enables highlighting of tiles to indicate ship placement
   * 
   * @param {Ship} ship 
   * @param {string} direction 
   */
  static enableHighlight(ship, direction) {
    this.currentShip = ship;
    this.currentDirection = direction;
    this.usersGrid.addEventListener('mouseover', this.#addHighlight);
    this.usersGrid.addEventListener('mouseout', this.#removeHighlight);
  }

  /**
   * Disables hightlighting of tiles
   */
  static disableHighlight() {
    this.usersGrid.removeEventListener('mouseover', this.#addHighlight);
    this.usersGrid.removeEventListener('mouseout', this.#removeHighlight);
  }
}
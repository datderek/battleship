import './style.css';
import GameController from './modules/GameController.js'

const grids = document.querySelectorAll('.grid');

grids.forEach((grid) => {
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

const game = new GameController();
game.start()
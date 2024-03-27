import './style.css';

const grids = document.querySelectorAll('.grid');

grids.forEach((grid) => {
  for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.classList.add('tile');
    grid.appendChild(div);
  }
})
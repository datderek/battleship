export default class Player {
  constructor(name) {
    this.name = name;
  }

  selectMove() {
    return new Promise((resolve) => {
      document.getElementById('users-grid').addEventListener('click', (e) => {
        resolve([Number(e.target.dataset.row), Number(e.target.dataset.col)]);
      }, { once: true })
    })
  }
}
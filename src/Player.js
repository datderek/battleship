export default class Player {
  constructor(name) {
    this.name = name;
  }

  selectMove() {
    return new Promise((resolve) => {
      document.getElementById('tile').addEventListener('click', (e) => {
        resolve(e);
      }, { once: true })
    })
  }
}
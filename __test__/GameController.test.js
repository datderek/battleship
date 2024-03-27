import GameController from "../src/GameController.js";

let game;
beforeEach(() => {
  game = new GameController();
})

test('playTurn returns message if coordinates are invalid', () => {
  expect(game.playTurn(NaN, NaN)).toBe('Invalid move. Please choose another tile.');
})

test('playTurn returns message if unsuccessful', () => {
  game.opponent.board.receiveAttack(1, 1);
  expect(game.playTurn(1, 1)).toMatch(/Please choose another tile./);
})

test('playTurn changes player at the end of a successful turn', () => {
  game.playTurn(1, 1);
  expect(game.currentPlayer).not.toBe(game.playerOne);
  expect(game.opponent).toBe(game.playerOne);
})

test('playTurn does not change player at the end of an unsuccessful turn', () => {
  game.opponent.board.receiveAttack(1, 1);
  game.playTurn(1, 1);
  expect(game.currentPlayer).toBe(game.playerOne);
  expect(game.opponent).not.toBe(game.playerOne);
})

test('playTurn updates the winner on game over', () => {
  const fleet = game.opponent.board.fleet;
  Object.values(fleet).forEach((ship) => {
    while (!ship.isSunk()) {
      ship.hit();
    }
  });
  game.playTurn(1, 1);
  expect(game.winner).toBe(game.playerOne);
})
import GameBoard from '../src/GameBoard.js'

test('place updates board with ship', () => {
  const board = new GameBoard();
  board.place(3, 4, 'patrol');
  expect(board.grid[3][4]).toEqual({hasShip: board.fleet.patrol, isShot: false});
  expect(board.grid[4][4]).toEqual({hasShip: board.fleet.patrol, isShot: false});
  expect(board.grid[5][4]).toEqual({hasShip: null, isShot: false});
});

test('place returns message if coordinates are out of range', () => {
  const board = new GameBoard();
  expect(board.place(-1, 2, 'patrol')).toBe('Coordinates are out of bound.');
})

test('place returns message if a ship is already present', () => {
  const board = new GameBoard();
  board.place(1, 2, 'patrol');
  expect(board.place(2, 2, 'battleship')).toBe('There is already a ship at that location.');
});

test('receiveAttack updates the board', () => {
  const board = new GameBoard();
  board.receiveAttack(0, 0);
  expect(board.grid[0][0]).toEqual({hasShip: null, isShot: true});
});

test('receiveAttack returns message if coordinates are out of bounds', () => {
  const board = new GameBoard();
  expect(board.receiveAttack(0, 10)).toBe('Coordinates are out of bound.');
});

test('receiveAttack returns message if tile have already been shot', () => {
  const board = new GameBoard();
  board.receiveAttack(0, 0);
  expect(board.receiveAttack(0, 0)).toBe('You have already shot this tile.');
});



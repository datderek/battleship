import GameBoard from '../src/modules/GameBoard.js'

let board;
beforeEach(() => {
  board = new GameBoard();
})

test('place correctly updates board with vertical ship', () => {
  board.place(3, 4, 'patrol', 'vertical');
  expect(board.grid[3][4]).toEqual({hasShip: board.fleet.patrol, isShot: false});
  expect(board.grid[4][4]).toEqual({hasShip: board.fleet.patrol, isShot: false});
  expect(board.grid[5][4]).toEqual({hasShip: null, isShot: false});
});

test('place correctly updates board with horizonal ship', () => {
  board.place(3, 4, 'patrol', 'horizontal');
  expect(board.grid[3][4]).toEqual({hasShip: board.fleet.patrol, isShot: false});
  expect(board.grid[3][5]).toEqual({hasShip: board.fleet.patrol, isShot: false});
  expect(board.grid[3][6]).toEqual({hasShip: null, isShot: false});
});

test('place returns success message', () => {
  expect(board.place(3, 4, 'patrol', 'horizontal')).toBe('success');
})

test('place returns message if ship does not fit', () => {
  expect(board.place(8, 8, 'battleship', 'horizontal')).toBe('Ship does not fit at that location.');
});

test('place returns message if coordinates are out of range', () => {
  expect(board.place(-1, 2, 'patrol', 'vertical')).toBe('Coordinates are out of bound.');
})

test('place returns message if a ship is already present vertically', () => {
  board.place(1, 2, 'patrol', 'vertical');
  expect(board.place(2, 2, 'battleship', 'vertical')).toBe('There is already a ship at that location.');
});

test('receiveAttack updates the board', () => {
  board.receiveAttack(0, 0);
  expect(board.grid[0][0]).toEqual({hasShip: null, isShot: true});
});

test('receiveAttack returns success message', () => {
  expect(board.receiveAttack(0, 0)).toBe('success');
});

test('receiveAttack returns message if coordinates are out of bounds', () => {
  expect(board.receiveAttack(0, 10)).toBe('Coordinates are out of bound.');
});

test('receiveAttack returns message if tile have already been shot', () => {
  board.receiveAttack(0, 0);
  expect(board.receiveAttack(0, 0)).toBe('You have already shot this tile.');
});

test('isAllSunk returns false if there are remaining ships', () => {
  expect(board.isAllSunk()).toBe(false);
});

test('isAllSunk returns true if there are no remaining ships', () => {
  const fleet = board.fleet;
  Object.values(fleet).forEach((ship) => {
    while (!ship.isSunk()) {
      ship.hit();
    }
  });
  expect(board.isAllSunk()).toBe(true);
})



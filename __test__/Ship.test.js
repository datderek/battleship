import Ship from '../src/Ship.js';

test('constructor throws error if length is no provided', () => {
  expect(() => new Ship()).toThrow()
});

test('constructor throws error if length is less than 0', () => {
  expect(() => new Ship(-1)).toThrow()
});

test('constructor throws error if length is greater than 5', () => {
  expect(() => new Ship(6)).toThrow()
})

test('hit updates hitCount', () => {
  const ship = new Ship(2);
  ship.hit();
  expect(ship.hitCount).toBe(1);
});

test('hit does not update hitCount past ship length', () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  ship.hit();
  expect(ship.hitCount).toBe(2);
})

test('isSunk returns false when ship is not sunk', () => {
  const ship = new Ship(2);
  expect(ship.isSunk()).toBe(false);
});

test('isSunk returns true when ship is sunk', () => {
  const ship = new Ship(2);
  ship.hit();
  ship.hit();
  expect(ship.isSunk()).toBe(true);
});